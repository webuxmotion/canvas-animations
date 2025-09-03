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
  let angle = 0;

  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  // end INITIAL DATA


  function update() {
    ball.y = canvas.height / 2 + Math.sin(angle) * 200;
    angle += 0.1;
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