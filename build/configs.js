const path = require('path')
const buble = require('rollup-plugin-buble')
const flow = require('rollup-plugin-flow-no-whitespace')
const cjs = require('rollup-plugin-commonjs')
const node = require('rollup-plugin-node-resolve')
const replace = require('rollup-plugin-replace')
const css = require('rollup-plugin-css-only')
const version = process.env.VERSION || require('../package.json').version
const banner =
`/**
  * vue-perfect-scrollbar v${version}
  * (c) ${new Date().getFullYear()} Degfy Wang
  * @license MIT
  */`

const resolve = _path => path.resolve(__dirname, '../', _path)

module.exports = [
  // browser dev
  {
    file: resolve('dist/vps.js'),
    format: 'umd',
    env: 'development'
  },
  {
    file: resolve('dist/vps.min.js'),
    format: 'umd',
    env: 'production'
  },
  {
    file: resolve('dist/vps.common.js'),
    format: 'cjs'
  },
  {
    file: resolve('dist/vps.esm.js'),
    format: 'es'
  }
].map(genConfig)

function genConfig (opts) {
  const config = {
    input: {
      input: resolve('src/index.js'),
      plugins: [
        flow(),
        node(),
        cjs(),
        css({ output: 'dist/vps.css' }),
        replace({
          __VERSION__: version
        }),
        buble()
      ]
    },
    output: {
      file: opts.file,
      format: opts.format,
      banner,
      name: 'VueRouter'
    }
  }

  if (opts.env) {
    config.input.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  return config
}
