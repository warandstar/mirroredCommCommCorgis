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
createTable(db);

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', (msg) => handleMessage(ws, msg));
});

/**
 * Handler for messages.
 * @param {String} msg JSON formatted request
 */
function handleMessage(ws, msg) {
  data = JSON.parse(msg);
  if (data.action) {
    const action = data.action.toLowerCase();
    if (action === 'chat') {

    } else {
      error(ws, msg + " is not a valid action");
    }
  } else {
    error(ws, 'Please specify an action (chat, join_char, leave_char, move_char)');
  }
}

function createTable(database) {
  db.serialize(() => {
    const createTableQuery = `CREATE TABLE Characters(
      name      varchar(15),
      x         int,
      y         int
    );`
    db.run(createTableQuery);
  });
}

function broadcastToAll(msg) {
  wss.clients.forEach((client) => {
    client.send(msg);
  });
}

/**
 * Sends error as plain text in format `ERROR:` followed by msg
 * @param {*} ws - websocket to use
 * @param {*} msg - message to send
 */
function error(ws, msg) {
  ws.send("ERROR: " + msg);
}