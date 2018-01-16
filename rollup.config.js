import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json';
// import replace from 'rollup-plugin-replace';

import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es';




export default [
  {
    input: 'src/main.js',
    output: {
      name: '_',
      file: pkg.browser,
      format: 'umd'
    },
    plugins:[
      // replace({
      //   'process.env.NODE_ENV': JSON.stringify( 'production' )
      // }),
      resolve({
        jsnext: true,
        node: true,
        main: true,
        browser: true
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      buble({  // transpile ES2015+ to ES5
        objectAssign: 'Object.assign',
        exclude: ['node_modules/**']
      }),
      // uglify({},minify),
      json()
    ]
  },
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      resolve({
        jsnext: true,
        node: true,
        main: true,
        browser: true
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      json(),
      uglify({},minify),
      buble({
        objectAssign: 'Object.assign',
        exclude: ['node_modules/**']
      })
    ]
  }
]
