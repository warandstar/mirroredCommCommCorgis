var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var CHARACTER_WIDTH = 32;
var CHARACTER_HEIGHT = 39;

var charX = 300;
var charY = 300;

var characterX = (canvas.width - CHARACTER_WIDTH) / 2;
// const character = new Image();
// character.src = "./assets/penguin-blue.jpg";
// character.onload = () => {
//   ctx.drawImage(character, 100, 300, CHARACTER_WIDTH, CHARACTER_HEIGHT);
// };

function drawChar() {
  const character = new Image();
  character.src = "./assets/penguin-blue.jpg";
  character.onload = () => {
    ctx.drawImage(character, charX, charY, CHARACTER_WIDTH, CHARACTER_HEIGHT);
  };
}

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = true;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = false;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = false;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawChar();

  if (rightPressed) {
    charX += 7;
  } else if (leftPressed) {
    charX -= 7;
  } else if (upPressed) {
    charY -= 7;
  } else if (downPressed) {
    charY += 7;
  }
}

setInterval(draw, 10);

drawChar();
