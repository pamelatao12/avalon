import * as firebaseAdmin from "firebase-admin";

const serviceAccount = require("../../../../firebase-adminsdk.json");

const DATABASE_URL = "https://degen-poker.firebaseio.com";

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: DATABASE_URL
});

export const db = firebaseAdmin.database();

const table = db.ref("server");
table.once("value", snapshot => {
  console.log("current state: ", snapshot.val());
});
