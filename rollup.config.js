import pkg from './package.json';
import buble from 'rollup-plugin-buble';


export default [
  {
    input: 'src/main.js',
    output: {
      name: 'z',
      file: pkg.browser,
      format: 'umd'
    },
    plugins:[
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
      buble({
        objectAssign: 'Object.assign',
        exclude: ['node_modules/**']
      })
    ]
  }
]
