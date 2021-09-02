const http = require("http");
const path = require("path");
const WebSocket = require("ws");

const express = require("express");

const PORT = 3000;

/**
 * Set up express app to serve static resources
 */
const app = express();
app.use("/", express.static(path.join(__dirname, "web")));

/**
 * Set up websocket server (wraps express app)
 */
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("received: %s", message);
  });
});

/**
 * Start server
 */
server.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
