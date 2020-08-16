const fs = require('fs')
const http = require('http')

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html: charset=UTF-8' })
    fs.createReadStream('./1.像鱼-[王贰浪 ]-「像鱼].mp3').pipe(res)
  })
  .listen(5000)
