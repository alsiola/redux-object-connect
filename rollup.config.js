import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  dest: 'index.js',
  external: ['react-redux'],
  plugins: [
      babel({
          exclude: 'node_modules/**'
      })
  ]
};