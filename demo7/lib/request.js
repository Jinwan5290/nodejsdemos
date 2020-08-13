const https = require('https')

module.exports = url =>
  new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = []
      res.on('data', chunk => {
        data.push(chunk)
      })
      res.on('end', () => {
        let body
        try {
          body = JSON.parse(data.join(''))
        } catch (error) {
          console.log('something was wrong')
        }

        resolve(body)
      })
    })
  })
