const https = require('https')

https
  .get(
    'https://www.yuque.com/api/v2/repos/1149151/docs',
    {
      headers: {
        'X-Auth-Token': 'rnC4Y4x2lcgRUDttoiyaf3knKElOsRFsKiPyun97',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'
      }
    },
    res => {
      let data = ''
      res.on('data', chunk => {
        data += chunk
      })
      res.on('end', () => {
        console.log(JSON.parse(data))
      })
    }
  )
  .on('error', e => {
    console.log(e)
  })
