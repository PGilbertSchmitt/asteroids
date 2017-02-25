let MovingObject = require('./moving_object.js');
let Vector = require('./vector.js');
let Util = require('./util.js');

const DEFAULTS = {
  col: "#FF0000",
  rad () {
    return (Math.random() * 10) + 25;
  },
  speed: 5
};

function Asteroid (options = {}) {
  options.pos = options.pos || new Vector(0, 0);
  options.vel = options.vel || Vector.rand(DEFAULTS.speed);
  options.rad = DEFAULTS.rad();
  options.col = DEFAULTS.col;
  
  MovingObject.call(this, options);
}

Util.inherit(Asteroid, MovingObject);
