const request = require('request')
const url = 'https://nodejs.org/dist/index.json'

request.get(url, (error, response, body) => {
  const json = JSON.parse(body)
  console.log('res', response, body, json)
})
