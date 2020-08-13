const requireMp3 = require('./requestformp3')
const fs = require('fs')

module.exports = async ({ song, res, findName }) => {
  const data = await requireMp3(res.url)
  fs.writeFileSync('文件.txt', 'Node.js 中文网', 'utf8', () => {})

  fs.writeFileSync('demo1.txt', '111', 'utf8', () => {})
  fs.writeFileSync(`${findName}.mp3`, data, 'binary', function (err) {
    if (err) {
      console.log('shibai')
    }
  })
}
