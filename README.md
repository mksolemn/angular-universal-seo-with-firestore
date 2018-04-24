# UniversalSeo

Build seo friendly Angular application with Angular universal and firestore.

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
 
