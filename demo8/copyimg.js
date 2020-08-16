const fs = require('fs')
const rs = fs.createReadStream('./WechatIMG58.jpeg')
const ws = fs.createWriteStream('./copy.jpeg')

rs.on('data', chunk => {
  if (ws.write(chunk) === false) {
    console.log('still cached')
    rs.pause()
  }
}).on('end', () => {
  ws.end()
})

ws.on('drain', () => {
  console.log('数据被消耗后，继续启动读数据')
  rs.resume()
})
