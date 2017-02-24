function MovingObject (options) {
  this.pos = options.pos || [ 0, 0 ];
  this.vel = options.vel || [ 0, 0 ];
  this.rad = options.rad || 1;
  this.col = options.col || "#FFFFFF";
}

MovingObject.prototype.x = function () {
  return this.pos[0];
};

MovingObject.prototype.y = function () {
  return this.pos[1];
};

MovingObject.prototype.dx = function () {
  return this.vel[0];
};

MovingObject.prototype.dy = function () {
  return this.vel[1];
};

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.x(), this.y(), this.rad, 0, 2 * Math.PI);
  ctx.fillStyle = this.col;
  ctx.fill();
};
