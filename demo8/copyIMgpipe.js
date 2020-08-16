const fs = require('fs')

fs.createReadStream('./copy.jpeg').pipe(
  fs.createWriteStream('./copy-pipe.jpeg')
)
