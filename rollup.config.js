import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';
import RollupMultipleEntries from 'rollup-multiple-entries';
import pkg from './package.json';

const standAloneConfig = new RollupMultipleEntries([{
  globConfig: [
    'src/*.js'
  ],
  rollupConfig: {
    output: {
      file: 'lib/[dir]/[name].js',
      format: 'cjs',
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
  }
}]).configs;

const mainConfig = {
  input: 'index.js',
  output: [
		{
			format: 'es',
			file: pkg.module
		},
		{
			format: 'cjs',
			file: pkg.main
		}
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
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


export default standAloneConfig[0].concat(mainConfig);
