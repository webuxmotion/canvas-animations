window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    image = new Image();
    
  image.src = "picture.jpeg";
  image.onload = function () {
    context.drawImage(image, 0, 0);
  };
};
