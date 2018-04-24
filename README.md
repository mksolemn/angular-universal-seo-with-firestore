# UniversalSeo

Build seo friendly Angular application with Angular universal and firestore.

# Step by Step Tutorial

## Generate Angular project

1. Generate new project called "universal-seo"
```
$ ng new universal-seo
```
2. Change application prefix to "seo"
```
$ --prefix=seo
```
3. Use scss for styles
```
$ --style=scss
```
4. Generate routing module:
```
$ --routing
```
5. All together
```

$ ng new universal-seo --prefix=seo --style=scss --routing

```


## Populate your firestore with demo data

### Navigate to utility directory

### Install Firebase Admin Node.js SDK
```
$ npm install --save firebase-admin
```

### Create service-key.json file
  2.1 Go to [Firebase console](https://console.firebase.google.com/)
  2.2 Navigate to [Service accounts](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk)
  2.3 Click "Generate new private key"
 
 You will prompted to download you private key. Copy and paste key file content to service-key-demo.json
 
### Update database URL to your database URL

```javascript
//populate-firebase-demo.js

databaseURL: "https://YOUR_DB.firebaseio.com"

```

### Populate database using nodejs
Make sure in in /utility directory before you run the script.

```javascript

node populate-firebase

```
 
