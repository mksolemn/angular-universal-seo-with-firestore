const admin = require('../node_modules/firebase-admin');
const serviceAccount = require("./service-key.json");

const data = require("./demo-data.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://angular-universal-test-e414c.firebaseio.com"
});

const db = admin.firestore();
var batch = db.batch();
data.forEach((post, i) => {
  var sfRef = db.collection('posts').doc(post.email);
  batch.set(sfRef, post);
})

batch.commit().then(function (val) {
  console.log('Batch posted: ', val);
});


