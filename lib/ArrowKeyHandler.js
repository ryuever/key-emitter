'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var EmitterHelper = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var EmitterHelper$1 = function () {
  function EmitterHelper() {
    classCallCheck(this, EmitterHelper);

    this._subscriptions = {};
  }

  createClass(EmitterHelper, [{
    key: "on",
    value: function on(event, fn) {
      if (!this._subscriptions[event]) this._subscriptions[event] = [];
      this._subscriptions[event].push(fn);
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var args = Array.from(arguments).slice(1);
      var handlers = this._subscriptions[event] || [];
      handlers.forEach(function (fn) {
        return fn.apply(null, args);
      });
    }
  }]);
  return EmitterHelper;
}();

return EmitterHelper$1;

})));
});

var KeyCode = {
  UP: 38,
  DOWN: 40,
  ENTER: 13
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 1: only react to UP, DOWN and ENTER key
// 2: it better to monitor a passing value. on its change, it will update accordingly.
// 3: extends Emitter, it monitor the key code and will fire change when selected value change.
// 4: the default value is 0;

var UP = KeyCode.UP;
var DOWN = KeyCode.DOWN;
var ENTER = KeyCode.ENTER;

var ArrowKeyHandler = function (_EmitterHelper) {
  inherits(ArrowKeyHandler, _EmitterHelper);

  function ArrowKeyHandler(opts) {
    classCallCheck(this, ArrowKeyHandler);

    var _this = possibleConstructorReturn(this, (ArrowKeyHandler.__proto__ || Object.getPrototypeOf(ArrowKeyHandler)).call(this));

    _this.index = -1;
    _this.max = opts.max;

    if (typeof _this.max === 'undefined') throw new Error('option `max` is required');
    return _this;
  }

  createClass(ArrowKeyHandler, [{
    key: 'setState',
    value: function setState(keyCode) {
      if (keyCode === UP) {
        this.handleKeyUp();
      }

      if (keyCode === DOWN) {
        this.handleKeyDown();
      }

      if (keyCode === ENTER) {
        this.handleKeyEnter();
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp() {
      var old = this.index;
      this.index > 0 ? this.index-- : 0;

      old !== this.index && this.emit('change', {
        index: this.index
      });
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown() {
      var old = this.index;
      this.index < this.max - 1 ? this.index++ : this.max - 1;

      old !== this.index && this.emit('change', {
        index: this.index
      });
    }
  }, {
    key: 'handleKeyEnter',
    value: function handleKeyEnter() {
      this.emit('commit', {
        index: this.index
      });
    }
  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'setMax',
    value: function setMax(max) {
      this.max = max;
    }
  }]);
  return ArrowKeyHandler;
}(EmitterHelper);

module.exports = ArrowKeyHandler;
