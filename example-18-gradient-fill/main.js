window.onload = function () {
    const size = 400;
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const pt1 = { x: 0, y: 0 }; //gradient start point
    const pt2 = { x: 0, y: canvas.height }; //gradient end point
    const gradient = context.createLinearGradient(pt1.x, pt1.y, pt2.x, pt2.y);
  //gradient from white to red
  gradient.addColorStop(0, "#005BBB");
  gradient.addColorStop(1, "#FFD500");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
};
