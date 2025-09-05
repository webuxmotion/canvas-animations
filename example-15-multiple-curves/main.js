window.onload = function () {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    points = [],
    numPoints = 9;
  //array of random point objects
  for (var i = 0; i < numPoints; i++) {
    points.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    });
  }
  //move to the first point
  context.beginPath();
  context.moveTo(points[0].x, points[1].y);
  //and loop through each successive pair
  for (i = 1; i < numPoints; i += 2) {
    context.quadraticCurveTo(
      points[i].x,
      points[i].y,
      points[i + 1].x,
      points[i + 1].y
    );
  }
  context.stroke();
};
