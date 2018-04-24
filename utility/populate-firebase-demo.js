const admin = require('../node_modules/firebase-admin');
const serviceAccount = require("./service-key-demo.json");

const data = require("./demo-data.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://YOUR_DB.firebaseio.com"
});

data && Object.keys(data).forEach(key => {
  const nestedContent = data[key];

  if (typeof nestedContent === "object") {
    Object.keys(nestedContent).forEach(docTitle => {
      admin.firestore()
        .collection(key)
        .doc(docTitle)
        .set(nestedContent[docTitle])
        .then((res) => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    });
  }
});
