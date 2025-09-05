window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("movieclip");

  // (function drawFrame() {
  //   window.requestAnimationFrame(drawFrame, canvas);
  //   context.drawImage(video, 0, 0, canvas.width, canvas.height);
  // })();

  video.addEventListener("play", function () {
    function drawFrame() {
      if (!video.paused && !video.ended) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(drawFrame);
      }
    }
    drawFrame();
  });
};
