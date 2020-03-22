import express from "express";
import http from "http";
import * as FirebaseAdmin from "firebase-admin";
import socketIo from "socket.io";
import router from "./modules/router";
import { PORT } from "./config";

// Set up app with our own router.
const app = express();
app.use(router);

const server = http.createServer(app);

const serviceAccount = require("../firebase-adminsdk.json");

const admin = FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://degen-poker.firebaseio.com"
});
export const db = admin.database();
const table = db.ref("server");
table.once("value", snapshot => {
  console.log("current state: ", snapshot.val());
});
// const auth = admin.auth()

const io = socketIo(server); // < Interesting!

const getApiAndEmit = async socket => {
  socket.emit("FromAPI", new Date()); // Emitting a new message. It will be consumed by the client
};

let interval;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
