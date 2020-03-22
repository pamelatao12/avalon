import express from "express";
import http from "http";
import FirebaseAdmin from 'firebase-admin';
import socketIo from "socket.io";
import routes from "./routes";
import { determineHandValue } from "./modules/cards/hand";
import Card from "./modules/cards/card";
import { ACE, FIVE, TEN, THREE, TWO } from "./modules/cards/value";
import { HEART } from "./modules/cards/suit";
import { 
  AddEventListenerController as AddEventListener,
  ReadOnceController as ReadOnce 
} from "./controllers/firebase/db/ReadDatabaseController"
import {
  UpdateDataController as UpdateData,
  SetDataController as SetData,
  PushDataController as PushData 
} from "./controllers/firebase/db/WriteDatabaseController"

const port = process.env.PORT || 4000;

const app = express();
app.use(routes);

const server = http.createServer(app);

const serviceAccount = require("../firebase-adminsdk.json");

const admin = FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://degen-poker.firebaseio.com"
})
/* basic example on accessing adminSDK auth and realtime db api */
// 
// const auth = admin.auth()
//
// const db = admin.database()
// const table = db.ref("server/poker/table")
// ref.once("value", snapshot => {
//   console.log(snapshot.val())
// })

const io = socketIo(server); // < Interesting!

const getApiAndEmit = async socket => {
  socket.emit("FromAPI", new Date()); // Emitting a new message. It will be consumed by the client
};

let interval;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);

  // TODO: Remove debug stuff below.
  determineHandValue([
    new Card(ACE, HEART),
    new Card(TEN, HEART),
    new Card(TEN, HEART),
    new Card(TEN, HEART),
    new Card(TEN, HEART)
  ]);

  // TODO: delete later. checking read and write methods to firebase db
  const tableSetup = {
    "player_count": 6,
    "settings": {
      "small_blind": .2,
      "big_blind": .4,
      "buy_in_min": 10,
      "buy_in_max": 20
    },
    "table_name": "degens at it again"
  }
  const tablePath = 'server/poker/table'
  SetData(tableSetup, tablePath)
  ReadOnce('server/poker/table')
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
