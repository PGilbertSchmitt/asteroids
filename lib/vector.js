function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (other) {
  let v = new Vector(
    this.x + other.x,
    this.y + other.y
  );
  return v;
};

Vector.prototype.minus = function (other) {
  let v = new Vector(
    this.x - other.x,
    this.y - other.y
  );
  return v;
};

Vector.prototype.dist = function (other) {
  let dx = this.x - other.x;
  let dy = this.y - other.y;
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
};

window.Vector = Vector;
module.exports = Vector;
