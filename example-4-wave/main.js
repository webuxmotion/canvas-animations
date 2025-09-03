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
  
  const ball = new Ball();
  const range = 200;
  const speedX = 1;
  const speedY = 0.05;
  const centerY = 200;
  let angle = 0;

  // end INITIAL DATA

  function update() {
    ball.y = centerY + Math.sin(angle) * range;
    ball.x += speedX;
    angle += speedY;
  }

  function draw() {
    ball.draw(ctx);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    update();
    draw();

    // --- FPS meter ---
    fpsMeter.update();
    fpsMeter.draw(ctx, canvas.width - 100, 30);

    requestAnimationFrame(animate);
  }

  animate();
}