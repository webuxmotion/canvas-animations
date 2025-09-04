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
  
  const mouse = utils.captureMouse(canvas);
  const ball = new Ball();
  let distance = null;
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.radius = 4;

  ctx.font = '30px Arial';
  ctx.fillStyle = 'blue';
  ctx.strokeStyle = 'red';

  // end INITIAL DATA

  function update() {
    const dx = mouse.x - ball.x;
    const dy = mouse.y - ball.y;

    distance = Math.sqrt(dx * dx + dy * dy);
  }

  function draw() {
    ball.draw(ctx);
    ctx.fillText(distance, mouse.x, mouse.y);
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