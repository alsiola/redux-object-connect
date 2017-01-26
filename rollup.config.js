import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  dest: 'build/index.js',
  external: ['react-redux'],
  plugins: [
      babel({
          exclude: 'node_modules/**'
      })
  ]
};