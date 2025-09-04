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
  const range = 220;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const speedX = 0.07;
  const speedY = 0.08;
  let angleX = 0;
  let angleY = 0;
  
  ball.radius = 6;

  // end INITIAL DATA

  function update() {
    ball.x = centerX + Math.sin(angleX) * range;
    ball.y = centerY + Math.sin(angleY) * range;

    angleX += speedX;
    angleY += speedY;
  }

  function draw() {
    ball.draw(ctx);
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