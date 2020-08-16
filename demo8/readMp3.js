const fs = require('fs')

const rs = fs.createReadStream('./1.像鱼-[王贰浪 ]-「像鱼].mp3')

let n = 0

rs
  .on('data', chunk => {
    n++
    console.log(chunk.byteLength)
    console.log(Buffer.isBuffer(chunk))

    rs.pause()
    console.log('暂停获取...')
    setTimeout(() => {
      console.log('继续获取....', n + 1)
      rs.resume()
    }, 100)
  })
  .on('end', () => {
    console.log(`传输结束，共收到${n}个Buffer快`)
  })
  .on('close', () => {
    console.log('传输关闭')
  })
  .on('error', e => {
    console.log('传输出错', e)
  })
