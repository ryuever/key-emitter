// 1: only react to UP, DOWN and ENTER key
// 2: it better to monitor a passing value. on its change, it will update accordingly.
// 3: extends Emitter, it monitor the key code and will fire change when selected value change.
// 4: the default value is 0;

import EmitterHelper from 'emitter-helper';

import KeyCode from './KeyCode';

const { UP, DOWN, ENTER } = KeyCode;

class ArrowKeyHandler extends EmitterHelper {
  constructor(opts) {
    super();

    this.index = -1;
    this.max = opts.max;

    if (typeof this.max === 'undefined') throw new Error(`option \`max\` is required`);
  }

  setState(keyCode) {
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

  handleKeyUp() {
    const old = this.index;
    this.index > 0 ? this.index-- : 0;

    old !== this.index && this.emit('change', {
      index: this.index,
    })
  }

  handleKeyDown() {
    const old = this.index;
    this.index < this.max - 1 ? this.index++ : this.max - 1;

    old !== this.index && this.emit('change', {
      index: this.index,
    });
  }

  handleKeyEnter() {
    this.emit('commit', {
      index: this.index,
    });
  }

  setIndex(index) {
    this.index = index;
  }

  setMax(max) {
    this.max = max;
  }
}

module.exports = ArrowKeyHandler;
