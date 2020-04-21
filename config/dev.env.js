'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"dev"',
  ENV_CONFIG: '"dev"',
  API_ROOT: '"http://(本地环境请求地址)"'
});
