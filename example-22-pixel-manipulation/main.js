window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("movieclip");
    const fpsMeter = createFpsMeter();

  (function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas);

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    var imagedata = context.getImageData(0, 0, canvas.width, canvas.height),
      pixels = imagedata.data;
      
    //pixel iteration
    for (var offset = 0, len = pixels.length; offset < len; offset += 4) {
      //invert each color component of the pixel: r,g,b,a (0-255)
      pixels[offset] = 255 - pixels[offset]; //red to cyan
      pixels[offset + 1] = 255 - pixels[offset + 1]; //green to magenta
      pixels[offset + 2] = 255 - pixels[offset + 2]; //blue to yellow
      //pixels[offset + 4] is alpha (the fourth component)
    }
    context.putImageData(imagedata, 0, 0);

    fpsMeter.update();
    fpsMeter.draw(context, canvas.width - 100, 30);
  })();
};
