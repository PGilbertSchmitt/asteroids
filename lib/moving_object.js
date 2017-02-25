let Vector = require('./vector.js');

function MovingObject (options = {}) {
  this.pos = options.pos || new Vector(0, 0);
  this.vel = options.vel || new Vector(0, 0);
  this.rad = options.rad || 10;
  this.col = options.col || "#FFFFFF";
}

MovingObject.prototype.x = function () {
  return this.pos.x;
};

MovingObject.prototype.y = function () {
  return this.pos.y;
};

MovingObject.prototype.dx = function () {
  return this.vel.x;
};

MovingObject.prototype.dy = function () {
  return this.vel.y;
};

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.x(), this.y(), this.rad, 0, 2 * Math.PI);
  ctx.fillStyle = this.col;
  ctx.fill();
};

// DONT CALL IN NODE
// let ctx = document.getElementById('canvas').getContext('2d');
// let thing = new MovingObject({
//   pos: new Vector(50, 50),
//   col: "green"
// });
// thing.draw(ctx);
