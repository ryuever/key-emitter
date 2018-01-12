(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.KeyCode = factory());
}(this, (function () { 'use strict';

var KeyCode = {
  UP: 38,
  DOWN: 40,
  ENTER: 13
};

return KeyCode;

})));
