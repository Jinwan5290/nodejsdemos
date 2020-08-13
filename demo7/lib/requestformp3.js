const https = require('https')
const fs = require('fs')
module.exports = url =>
  new Promise((resolve, reject) => {
    console.log('url', url)
    https.get(url, res => {
      res.setEncoding('binary')

      let data = ''
      res.on('data', chunk => {
        data += chunk
      })
      res.on('error', error => console.log(error))
      res.on('end', () => resolve(data))
    })
  })
