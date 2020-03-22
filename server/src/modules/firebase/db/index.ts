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

/**
 * Write or replace data to a defined path, like messages/users/<username>. If
 * the path is undefined, the root will be used.
 */
const set = (path: string | undefined, payload: any): Promise<void> => {
  const ref = db.ref(path);
  return ref.set(payload);
};

/**
 * Reads a static snapshot of the contents at the given database path, as they
 * existed at the time of the read event. If the path is undefined, the root
 * will be used.
 */
const read = (path: string | undefined): Promise<any> => {
  const ref = db.ref(path);
  return ref.once("value", snapshot => snapshot.val());
};

export default {
  set,
  read
};