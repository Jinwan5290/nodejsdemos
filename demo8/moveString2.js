const stream = require('stream')

class ReadStream extends stream.Readable {
  constructor () {
    super()
  }

  _read () {
    this.push('I')
    this.push('Love ')
    this.push('you')
    this.push(null)
  }
}

class WriteStream extends stream.Writable {
  constructor () {
    super()
  }

  _write (chunk, encode, cb) {
    console.log(chunk.toString())
    cb()
  }
}

class TransformStream extends stream.Transform {
  constructor () {
    super()
  }

  _transform (chunk, encode, cb) {
    this.push(chunk)
    cb()
  }

  _flush (cb) {
    this.push('On yeah')
    cb()
  }
}

const rs = new ReadStream()
const ws = new WriteStream()
const ts = new TransformStream()

rs.pipe(ts).pipe(ws)
