/**
 * Server code for Comm Comm Corgis using Express and WebSockets
 */

const express = require('express');
const { Server } = require('ws');
const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');

const PORT = process.env.PORT || 3456;
const INDEX = './static/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, {root:__dirname}))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

// connection to sqlite database
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQLite database');
});

// Set up table 
db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT)");

  let stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', (msg) => console.log("Message: " + msg));
});

setInterval(() => {
  wss.clients.forEach((client) => {
      client.send(new Date().toTimeString());
  });
}, 1000);