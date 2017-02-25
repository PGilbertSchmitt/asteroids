/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

let Vector = __webpack_require__(0);

function MovingObject (options = {}) {
  this.pos = options.pos || new Vector(0, 0);
  this.vel = options.vel || new Vector(0, 0);
  this.rad = options.rad || 10;
  this.col = options.col || "#EEEEEE";
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

MovingObject.prototype.move = function () {
  this.pos = this.pos.plus(this.vel);
};

module.exports = MovingObject;

// DONT CALL IN NODE
// let ctx = document.getElementById('canvas').getContext('2d');
// let thing = new MovingObject({
//   pos: new Vector(50, 50),
//   col: "green"
// });
// thing.draw(ctx);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const Util = {
  inherit (Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }
};

module.exports = Util;


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

let MovingObject = __webpack_require__(1);
let Vector = __webpack_require__(0);
let Util = __webpack_require__(2);

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


/***/ })
/******/ ]);