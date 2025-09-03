function createFpsMeter() {
  let lastTime = performance.now();
  let frameCount = 0;
  let fps = 0;

  return {
    // Call this every frame to update FPS calculation
    update() {
      frameCount++;
      const now = performance.now();
      const delta = now - lastTime;

      if (delta >= 1000) { // 1 second has passed
        fps = frameCount;
        frameCount = 0;
        lastTime = now;
      }
    },

    // Call this every frame to draw the FPS on the canvas
    draw(ctx, x = 10, y = 20) {
      ctx.fillStyle = "black";
      ctx.font = "16px monospace";
      ctx.fillText("FPS: " + fps, x, y);
    }
  };
}