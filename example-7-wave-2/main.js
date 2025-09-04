window.onload = function () {
  const canvas = document.getElementById("canvas");
  resizeCanvas(canvas);
  const ctx = canvas.getContext("2d");
  const fpsMeter = createFpsMeter();

  window.addEventListener("resize", () => {
    resizeCanvas(canvas);
  });

  /* 
    INITIAL DATA
  */
  
  const range = 300;
  const speedX = 1;
  const speedY = 0.05;
  const centerY = canvas.height / 2;
  let angle = 0;
  let xpos = 0;
  let ypos = centerY;
  let xpos2 = 0;
  let ypos2 = centerY;

  // initial params
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";

  // end INITIAL DATA

  function update() {
    xpos = xpos2;
    ypos = ypos2;

    xpos2 += speedX;
    angle += speedY;
    ypos2 = centerY + Math.sin(angle) * range;
  }

  function draw() {
    ctx.beginPath();
    ctx.moveTo(xpos, ypos);
    ctx.lineTo(xpos2, ypos2);
    ctx.stroke();
  }

  function animate() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    update();

    draw();

    // --- FPS meter ---
    fpsMeter.update();
    fpsMeter.draw(ctx, canvas.width - 100, 30);

    requestAnimationFrame(animate);
  }

  animate();
}