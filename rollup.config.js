import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'assets/bundle.js',
    format: 'iife'
  },
  plugins: [ 
    resolve(),
    sass({
      options: {
        file: 'src/main.sass'
      },
      output: 'rollup.css'
    })
  ]
};