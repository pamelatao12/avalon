import express from "express";
import http from "http";
import admin from "firebase-admin";
import socketIo from "socket.io";
import routes from "./routes";

const port = process.env.PORT || 4000;

const app = express();
app.use(routes);

const server = http.createServer(app);

const serviceAccount = require("../firebase-adminsdk.json");

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://degen-poker.firebaseio.com"
});

const defaultAuth = admin.auth(firebase);

const io = socketIo(server); // < Interesting!

const getApiAndEmit = async socket => {
  socket.emit("FromAPI", new Date()); // Emitting a new message. It will be consumed by the client
};

let interval;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
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
