document.addEventListener("DOMContentLoaded", function () {
  const s = document.getElementById("sandbox");
  if (s.getContext) {
    const ctx = s.getContext("2d");
    s.style.height = window.innerHeight + "px";
    s.style.width = window.innerWidth + "px";

    s.width = s.height * (s.clientWidth / s.clientHeight);

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(0, 0, 20, 20);

  } else {
    // canvas-unsupported code here
  }
});
