import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/z.min.js',
    format: 'umd',
    name: 'z',
  },
  plugins: [
    babel(),
    uglify({},minify)
  ]
}
