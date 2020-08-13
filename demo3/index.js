const fs = require('fs')

fs.readFile('img1.jpg', (err, buffer) => {
  console.log(Buffer.isBuffer(buffer) && 'readfile读取图片拿到的是buffer数据')
  fs.writeFile('copy.jpg', buffer, function (err) {})
  const baser64Image = Buffer.from(buffer).toString('base64')
  console.log(baser64Image)

  const decodeImage = Buffer.from(baser64Image, 'base64')
  console.log(Buffer.compare(buffer, decodeImage))

  fs.writeFile('decode.jpg', decodeImage, err => {})
})
