import pkg from './package.json';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es';
// import commonjs from 'rollup-plugin-commonjs'
// import json from 'rollup-plugin-json';
// import replace from 'rollup-plugin-replace';

export default [
  {
    input: 'src/main.js',
    output: {
      name: '_',
      file: 'z.min.js',
      format: 'umd'
    },
    plugins:[
      resolve(),
      buble({  // transpile ES2015+ to ES5
        objectAssign: 'Object.assign',
        exclude: ['node_modules/**']
      }),
      uglify({},minify)
    ],
  },
  {
    input: 'src/main.js',
    output: { file: pkg.main, format: 'es' },
    plugins: [
      resolve(),
      buble({
        objectAssign: 'Object.assign',
        exclude: ['node_modules/**']
      }),
      uglify({},minify)
    ]
  }
]
