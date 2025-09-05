window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    image = document.getElementById("picture");
  context.drawImage(image, 0, 0);
};
