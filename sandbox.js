document.addEventListener("DOMContentLoaded", function () {
  const cursor = {
    x: innerWidth / 2,
    y: innerHeight / 2,
  };

  function init() {
    window.requestAnimationFrame(draw);
  }

  addEventListener("mousemove", (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
  });

  function draw() {
    const s = document.getElementById("sandbox");
    const ctx = s.getContext("2d");
    s.style.height = window.innerHeight + "px";
    s.style.width = window.innerWidth + "px";

    s.width = s.height * (s.clientWidth / s.clientHeight);

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(cursor.x, cursor.y, 5, 10);
    window.requestAnimationFrame(draw);
  }

  init();
});
