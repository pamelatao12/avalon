import express from "express";
import http from "http";
import * as FirebaseAdmin from "firebase-admin";
import socketIo from "socket.io";
import router from "modules/router";
import { determineHandValue } from "./modules/cards/hand";
import Card from "./modules/cards/card";
import { ACE, FIVE, TEN, THREE, TWO } from "./modules/cards/value";
import { HEART } from "./modules/cards/suit";
import {
  AddEventListenerController as AddEventListener,
  GetStateController as GetState
} from "./modules/firebase/db/ReadDatabaseController";
import {
  UpdateDataController as UpdateData,
  SetDataController as SetData,
  PushDataController as PushData
} from "./modules/firebase/db/WriteDatabaseController";
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

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);

  // TODO: Remove debug stuff below.
  determineHandValue([
    new Card(ACE, HEART),
    new Card(TEN, HEART),
    new Card(TEN, HEART),
    new Card(TEN, HEART),
    new Card(TEN, HEART)
  ]);

  // TODO: delete later. testing read and write methods to firebase db
  const tableSetup = {
    player_count: 6,
    settings: {
      small_blind: 0.2,
      big_blind: 0.4,
      buy_in_min: 10,
      buy_in_max: 20
    },
    table_name: "degens at it again"
  };
  const tablePath = "server/poker/table";
  AddEventListener("value", "server");
  SetData(tableSetup, tablePath);
  GetState("server/poker/table");
  // console should log tableSetup
});

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
