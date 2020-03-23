// Configure this current directory as the root path for imports.
require("app-module-path/register");

import express from "express";
import http from "http";
import socketIo from "socket.io";
import router from "modules/router";
import { PORT } from "config";

// Set up app with our own router.
const app = express();
app.use(router);
app.set("json spaces", 2);

const server = http.createServer(app);
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
