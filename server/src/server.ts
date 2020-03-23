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
// Prettify JSON responses.
app.set("json spaces", 2);

const server = http.createServer(app);
const io = socketIo(server);

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

io.on("connection", socket => {
  console.log("New client connected");

  // Emit a new message that can be consumed by the client.
  socket.emit("FromAPI", new Date());

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
