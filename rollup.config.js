import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/z.js',
    format: 'umd',
    name: 'z',
  },
  plugins: [
    babel(
      {
        exclude: 'node_modules/**'
      }
    ),
    // uglify({},minify)
  ]
}
