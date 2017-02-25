function Vector(x, y) {
  this.x = x;
  this.y = y;
}

// Statics

Vector.rand = function (mag = 1) {
  let rad = 2 * Math.PI * Math.random();
  let x = Math.sin(rad);
  let y = Math.cos(rad);
  return new Vector(x * mag, y * mag);
};

// Prototypes

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
  let dVec = new Vector(dx, dy);
  return dVec.mag();
};

Vector.prototype.scale = function (m) {
  return new Vector(this.x * m, this.y * m);
};

Vector.prototype.mag = function () {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)); 
};

module.exports = Vector;
