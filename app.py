# Server side code for Comm Comm Corgis

from flask import Flask
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@socketio.on('joined')
def handle_character_change(ws):
    while not ws.closed:
        message = ws.receive()
        ws.send(message)

if __name__ == "__main__":
    socketio.run(app)