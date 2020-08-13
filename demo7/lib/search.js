const request = require('./request')
const { resolve } = require('path')

module.exports = name =>
  request('https://musicapi.leanapp.cn/search?limit=100&keywords=' + name)
