window.onload = function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const mouse = utils.captureMouse(canvas);

  const points = [];
  let isMouseDown = false;
  let isHover = false;
  let throughTheControlPoint = false;

  function onMouseMove() {
    // point.x = mouse.x;
    // point.y = mouse.y;
    // point.draw(ctx);
  }

  canvas.addEventListener(
    "mousedown",
    function () {
      isMouseDown = true;

      if (!isHover) {
        const point = new Point();
        point.x = mouse.x;
        point.y = mouse.y;
        points.push(point);
      }

      canvas.addEventListener("mousemove", onMouseMove, false);
    },
    false
  );
  canvas.addEventListener(
    "mouseup",
    function () {
      isMouseDown = false;
      canvas.removeEventListener("mousemove", onMouseMove, false);
    },
    false
  );
  canvas.addEventListener(
    "mouseleave",
    function () {
      isMouseDown = false;
      canvas.removeEventListener("mousemove", onMouseMove, false);
    },
    false
  );

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    isHover = false;

    points.forEach((point) => {
      const contains = point.contains(mouse.x, mouse.y);

      if (contains) {
        isHover = true;
        if (isMouseDown) {
          point.color = "blue";
          point.x = mouse.x;
          point.y = mouse.y;
        } else {
          point.color = "red";
        }
      } else {
        point.color = "white";
      }

      point.draw(ctx);
    });

    if (points.length == 3) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      let x1 = null;
      let y1 = null;

      if (throughTheControlPoint) {
        x1 = points[1].x * 2 - (points[0].x + points[2].x) / 2;
        y1 = points[1].y * 2 - (points[0].y + points[2].y) / 2;
      } else {
        x1 = points[1].x;
        y1 = points[1].y;
      }

      ctx.quadraticCurveTo(x1, y1, points[2].x, points[2].y);
      ctx.stroke();
    }

    requestAnimationFrame(animate);
  }

  animate();
};
