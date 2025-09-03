function drawLine({ ctx, line }) {
  ctx.beginPath();
  ctx.moveTo(line.p1.x, line.p1.y);
  ctx.lineTo(line.p2.x, line.p2.y);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#768cbcff";
  ctx.stroke();
}
