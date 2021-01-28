'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist', // 将构建好的文件输出到哪里
  //assetsDir: '/', // 放置静态资源的地方 (js/css/img/font/...)
  lintOnSave: process.env.NODE_ENV === 'development',
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  chainWebpack(config) {
    config.plugins.delete('eslint') // 移除eslint
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    extract: false
  },
}
