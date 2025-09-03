window.onload = function () {
  const canvas = document.getElementById("canvas");
  resizeCanvas(canvas);
  const ctx = canvas.getContext("2d");
  const fpsMeter = createFpsMeter();

  window.addEventListener("resize", () => {
    resizeCanvas(canvas);
  });

  function update() {
   
  }

  function draw() {

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