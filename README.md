# UniversalSeo

Build seo friendly Angular application with Angular universal and firestore.

## Using the tutorial
Since tutorial is pretty long I do my best to make it easy to follow, no matter your level of expertise in Angular. Hopefully some visuals will help me guide you through this.

![alt text](https://github.com/mksolemn/angular-universal-seo-with-firestore/blob/master/src/assets/img/sanity-check.jpg "Sanity check") - this indicates sanity check alert, when you see this, it's time compile the code and check for any errors


## Generate Angular project

Generate new project as you please, but keeping these settings will make it easier to follow, but they're not required.
```
$ ng new universal-seo --prefix=seo --style=scss --routing
```

1. Generate new project called "universal-seo": ng new universal-seo
2. Change application prefix to "seo": --prefix=seo
3. Use scss for styles: --style=scss
4. Generate routing module: --routing

## Populate your firestore with demo data

### Navigate to utility directory & Install Firebase Admin Node.js SDK
```
$ cd utility
$ npm install --save firebase-admin
```

### Create service-key.json file
  1. Go to [Firebase console](https://console.firebase.google.com/)
  2. Navigate to [Service accounts](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk)
  3. Click "Generate new private key"
 
 You will prompted to download you private key. Create /utility/service-key-demo.json file and paste your private key file content.
 
### Update database URL to your database URL

```javascript
// populate-firebase.js

databaseURL: "https://YOUR_DB.firebaseio.com"

```

### Populate database using nodejs
Make sure you're in /utility directory before you run the script.

```javascript

node populate-firebase

```
 
This script will push data to collection with firebase push-keys. If you'd like to use custom ids, you may pass them to doc() method.
e.g. doc(post.email)

## Add firebase to the project

### Install dependencies

We will be using firebase library for Angular [More About AngularFire2 here](https://github.com/angular/angularfire2)

```
npm install firebase angularfire2 --save
```

### Import library
```javascript
// app.component.ts

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
```

### Setup firebase environment configuration
This information can be found in your firebase project home page under "Add firebase to your app"

```javascript
// environment.ts

export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

### Import firebase and environment variables to app.module.ts

```javascript
// app.module.ts

import {AngularFirestore} from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

...

  imports: [
    ...
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore]
  ...

```

### Test project
Before we continue, it's good idea to test if everything done up to this point is working. For the next step we'll fetch data from firebase and display in our app component.

Output list of usernames:

```javascript
// app.component.html

<ul>
  <li *ngFor="let post of posts | async">
    {{ post.username }}
  </li>
</ul>
<router-outlet></router-outlet>

```

Fetch posts from firebase:

```javascript
// app.component.ts

import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'seo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.posts = db.collection('posts').valueChanges();
  }
}

```

If everything is working on your side, lets continue building router and pages. I know it's tempting to jump to ssr and Angular Universal, but it's important to setup everything correctly to get the most of the tutorial.

## Setup Router and pages

### Create service to handle request to fetch posts
```
ng g s posts
```

First we rewrite fetching data from firestore, so we are able to use firestore push keys. This is not mandatory, but for most of my projects push keys are essential, so I think it's good to know how to retrieve them from firestore.

### Clear app.component.ts
We will move all functionality related to data retrieving to separate service, so your app.component.ts will look like this now:
```
// app.component.ts

import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  selector: 'seo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public postsService: PostsService) {

  }

  ngOnInit() {
  }

}

```

And we move everything to posts.service.ts
In case your IDE doesn't automatically take care of imports, you can check project code on github and copy the imports.

```javascript
// posts.service.ts

export class AppComponent {
  private postRef: AngularFirestoreCollection<any>;
  posts: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  postId: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.postRef = db.collection('posts');

    this.postId = this.postRef.snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {_id: id, ...data};
        });
      });

    this.postId
      .subscribe(docs => {
        this.posts.next(docs);
    });
  }
}
```

### Create routes

```
// app-routing.module.ts
...
const routes: Routes = [
  {
    path: 'post',
    children: [
      {path: ':id', component: PostPageComponent}
    ]
  }
];
...
```


### Update app.component.html to subscribe to data from posts.service.ts
```
// app.component.html

<div class="left">
<ul class="user-list">
  <li *ngFor="let post of postsService.posts | async">
    <a [routerLink]="['post', post._id]">
    {{ post.username }}
    </a>
  </li>
</ul>
</div>
<div class="right">
<router-outlet></router-outlet>
</div>

```

### And finally let's take care of imports
Your app.module.ts file should look something like this now

```javascript
// app.module.ts

imports...

@NgModule({
  declarations: [
    AppComponent,
    PostPageComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore, PostsService],
  bootstrap: [AppComponent]
})

```

Time for sanity check again, at this point you should have working navigation, next we will fetch specific post and render it on post-page.component
If you'd like to add some styling copy styles.scss file from github repo.

### Create new component PostPageComponent - this will display single post
```
ng g c post-page
```
If you're not familiar with Angular CLI aliases: g - generate, c - component.
This is great [cheatsheet](https://alligator.io/angular/angular-cli-reference/) to help you get comfortable with angular CLI commands.

