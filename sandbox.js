let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let posX = 0;
let posY = 0;

document.addEventListener("DOMContentLoaded", function () {
  function init() {
    window.requestAnimationFrame(draw);
  }

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function keyDownHandler(e) {
    switch (e.keyCode) {
      case 37:
        leftPressed = true;
        break;
      case 39:
        rightPressed = true;
        break;
      case 38:
        upPressed = true;
        break;
      case 40:
        downPressed = true;
        break;
    }
  }

  function keyUpHandler(e) {
    switch (e.keyCode) {
      case 37:
        leftPressed = false;
        break;
      case 39:
        rightPressed = false;
        break;
      case 38:
        upPressed = false;
        break;
      case 40:
        downPressed = false;
        break;
    }
  }

  function draw() {
    const s = document.getElementById("sandbox");
    const ctx = s.getContext("2d");
    s.style.height = window.innerHeight + "px";
    s.style.width = window.innerWidth + "px";

    s.width = s.height * (s.clientWidth / s.clientHeight);

    if (rightPressed) {
      posX += 1;
    } else if (leftPressed) {
      posX -= 1;
    }

    if (upPressed) {
      posY -= 1;
    } else if (downPressed) {
      posY += 1;
    }

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(posX, posY, 5, 10);
    window.requestAnimationFrame(draw);
  }

  init();
});
