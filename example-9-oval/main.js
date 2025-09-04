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
  
  const radiusX = 100;
  const radiusY = 70;
  const speed = 0.5;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  let angle = 0;
  let xpos = null;
  let ypos = null;
  let xpos2 = null;
  let ypos2 = null;

  ctx.lineWidth = 2;

  // end INITIAL DATA

  function update() {
    if (xpos == null && ypos == null) {
      xpos = centerX + Math.cos(angle) * radiusX;
      ypos = centerY + Math.sin(angle) * radiusY;
    } else {
      xpos = xpos2;
      ypos = ypos2;
    }

    angle += speed;
    
    xpos2 = centerX + Math.cos(angle) * radiusX;
    ypos2 = centerY + Math.sin(angle) * radiusY;
  }

  function draw() {
    ctx.beginPath();
    ctx.moveTo(xpos, ypos);
    ctx.lineTo(xpos2, ypos2);
    ctx.stroke();
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