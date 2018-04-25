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
