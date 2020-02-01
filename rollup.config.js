import autoPreprocess from 'svelte-preprocess';
import bundleSize from 'rollup-plugin-bundle-size';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const { name, main: umd, module: es } = pkg;

export default {
  input: 'src/index.js',
  output: [
    {
      file: es,
      format: 'es',
      sourcemap: true,
      name,
    },
    {
      file: umd,
      format: 'umd',
      sourcemap: true,
      name,
    },
  ],
  plugins: [
    svelte({
      dev: !production,
      hydratable: true,

      preprocess: autoPreprocess({
        postcss: {
          plugins: [require('autoprefixer')()],
        },
      }),
    }),

    resolve(),
    commonjs(),

    production && terser(),

    production && bundleSize(),
  ],
  watch: {
    clearScreen: false,
  },
};
