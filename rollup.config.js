import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';

const keysConfig = {
  input: 'src/KeyCode.js',
  output: {
    file: 'lib/KeyCode.js',
    format: 'umd',
    name: 'KeyCode',
  },
  plugins: [
    typescript(),
    resolve(),
    babel({
      babelrc: false,
      "presets": [
        ["env", {
          "modules": false
        }]
      ],
      "plugins": ["external-helpers"],
      exclude: 'node_modules/**'
    })
  ]
};

const handlerConfig = {
  input: 'src/ArrowKeyHandler.js',
  output: {
    file: 'lib/ArrowKeyHandler.js',
    format: 'umd',
    name: 'ArrowKeyHandler',
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      babelrc: false,
      "presets": [
        ["env", {
          "modules": false
        }]
      ],
      "plugins": ["external-helpers"],
      exclude: 'node_modules/**'
    })
  ]
};

export default [handlerConfig, keysConfig];
