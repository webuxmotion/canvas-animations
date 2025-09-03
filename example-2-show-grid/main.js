window.onload = function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const fpsMeter = createFpsMeter();

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  const mouse = utils.captureMouse(canvas);

  const arrows = [];
  for (let i = 0; i < 1000; i++) {
    const arrow = new Arrow();

    arrow.x = Math.random() * canvas.width;
    arrow.y = Math.random() * canvas.height;

    arrows.push(arrow);
  }

  function drawLines(items) {
    items.forEach((item) => {
      drawLine({ ctx, line: item });
    });
  }

  let lines = generateLines(canvas);

  window.addEventListener("resize", () => {
    resizeCanvas();
    lines = generateLines(canvas);
  });

  function update() {
    arrows.forEach((arrow) => {
      const dx = mouse.x - arrow.x;
      const dy = mouse.y - arrow.y;

      arrow.rotation = Math.atan2(dy, dx);
    });
  }

  function draw() {
    

    arrows.forEach((arrow) => {
      arrow.draw(ctx);
    });

    drawLines(lines);
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
};
