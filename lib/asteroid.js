let MovingObject = require('./moving_object.js');
let Vector = require('./vector.js');
let Util = require('./util.js');

function Asteroid (options = {}) {
  options.rad = options.rad || (Math.random() * 10) + 25;
  options.col = options.col || "#FF0000";
  MovingObject.call(this, options);
}

Util.inherit(Asteroid, MovingObject);
window.Asteroid = Asteroid;
