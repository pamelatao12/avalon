import * as firebaseAdmin from "firebase-admin";

const serviceAccount = require("../../../../firebase-adminsdk.json");

const DATABASE_URL = "https://degen-poker.firebaseio.com";

let isInitialized = false;

if (!isInitialized) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: DATABASE_URL
  });
}

export const db = firebaseAdmin.database();
