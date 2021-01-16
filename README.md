# Comm Comm Corgis

## Why?
 Who knows

## Client
By: Jong and Miguel
Will use React or not

### Displaying game
TBD how to do - could use DOM manipulation

### Controlling game
Will use mouse clicks for user to walk around environment.  Movements will be sent to server using WebSocket.

### Updating game
When server sends info, update position of other players.

## Server
By: Kevin and Sashu
Will use Python WebSockets and (hopefully) PostgreSQL

### Supported commands
For the minimum viable product we want update player location

### Request/Response format
Requests and responses will use JSON format

**Request required fields**

`action`: what the server should do.  Can be 'update', 'create', 'leave'.

if `action` is create

* `name`: name of character

if `action` is update:

* `name`: name of character to move

* `position`: position to move character to

if `action` is 'leave`

* `name`: name of character leaving

# Goals

1. Create game with characters that can walk
2. work on front end and creating assets
3. chat
4. TBD