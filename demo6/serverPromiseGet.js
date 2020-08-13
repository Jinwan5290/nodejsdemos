const https = require('https')
const { resolve } = require('path')
const { rejects } = require('assert')
const url = 'https://nodejs.org/dist/index.json'

const request = url => {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        let data = ''

        res.on('data', chunk => {
          data += chunk
        })
        res.on('end', () => {
          resolve(data.toString())
        })
      })
      .on('error', e => {
        reject(e)
      })
  })
}

request(url).then(data => console.log(data))
