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
 * Write or replace data to a defined path, like messages/users/<username>.
 */
const set = (path: string, payload: any): Promise<void> => {
  const ref = db.ref(path);
  return ref.set(payload);
};

/**
 * Pushes data to the path as part of a list.
 */
const push = async (path: string, payload: any): Promise<string> => {
  const ref = db.ref(path).push();
  await ref.set(payload);
  // Get the unique key for the payload.
  return ref.key || "";
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

/**
 * Clears everything in the database. This should be used sparingly and carefully.
 */
const clearAll = (): Promise<void> => {
  const ref = db.ref();
  return ref.set(null);
};

export default {
  set,
  push,
  read,
  clearAll
};
