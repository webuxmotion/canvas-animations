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
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const range = 100;
  const speed = 0.05;
  let angle = 0;

  ball.radius = 6;

  // end INITIAL DATA

  function update() {
    ball.x = centerX + Math.cos(angle) * range;
    ball.y = centerY + Math.sin(angle) * range;
    angle += speed;
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