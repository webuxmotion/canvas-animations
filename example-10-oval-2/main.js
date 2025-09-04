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
  
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radiusX = 200;
  const radiusY = 200;
  const pointsCount = 100;
  const stepAngle = (Math.PI * 2) / pointsCount;
  let angle = 0;
  const points = [];

  for (let i = 0; i < pointsCount; i++) {
    const point = {
      x: centerX + Math.cos(angle) * radiusX,
      y: centerY + Math.sin(angle) * radiusY
    }

    angle += stepAngle;

    points.push(point);
  }

  // end INITIAL DATA

  function update() {

  }

  function draw() {
    ctx.beginPath();

    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });

    ctx.lineTo(points[0].x, points[0].y);

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