const requireMp3 = require('./requestformp3')
const fs = require('fs')

module.exports = async ({ song, res, findName }) => {
  const data = await requireMp3(res.url)
  fs.writeFileSync(`${findName}.mp3`, data, 'binary', function (err) {
    if (err) {
      console.log('shibai')
    }
  })
}
