function Point() {
  this.x = 0;
  this.y = 0;
  this.color = "white";
  this.rotation = 0;
  this.size = 20;
}
Point.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.lineWidth = 1;
  context.fillStyle = this.color;
  context.beginPath();
  context.moveTo(-this.size / 2, -this.size / 2);
  context.lineTo(this.size / 2, -this.size / 2);
  context.lineTo(this.size / 2, this.size / 2);
  context.lineTo(-this.size / 2, this.size / 2);
  context.closePath();
  context.fill();
  context.stroke();
  context.restore();
};

Point.prototype.contains = function (mx, my) {
  const half = this.size / 2;
  
  return (
    mx >= this.x - half &&
    mx <= this.x + half &&
    my >= this.y - half &&
    my <= this.y + half
  );
};
