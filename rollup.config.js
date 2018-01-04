import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
// import { minify } from 'uglify-es';




export default [
  {
    input: 'src/main.js',
    output: {
      name: '_',
      file: pkg.browser,
      format: 'umd'
    },
    plugins:[
      resolve(),
      commonjs({
        include: 'node_modules/**',
      }),
      buble({  // transpile ES2015+ to ES5
        objectAssign: 'Object.assign',
        exclude: ['node_modules/**']
      })
    ]
  },
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      resolve(),
      commonjs({
        include: 'node_modules/**',
      }),
      // uglify({},minify),
      buble({
        objectAssign: 'Object.assign',
        exclude: ['node_modules/**']
      })
    ]
  }
]
