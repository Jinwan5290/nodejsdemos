const Readable = require('stream').Readable
const Writeble = require('stream').Writable

const rs = new Readable()
const ws = new Writeble()
let n = 0

rs.push('I')
rs.push('love ')
rs.push('jinlin!\n')
rs.push(null)

ws._write = function (chunk, ev, cb) {
  n++
  console.log('chunk' + n + ':' + chunk.toString())
  cb()
}

rs.pipe(ws)
