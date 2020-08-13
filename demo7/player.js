const EventMitter = require('events')
const { EventEmitter } = require('events')

class Player extends EventEmitter {
  constructor (name) {
    super()
    this.name = name
    this.score = 0
  }
}

let player = new Player('lian')

player.on('zombie', function (number) {
  if (number < 10) {
    this.score += 10 * number
  } else if (number < 20) {
    this.score += 8 * number
  } else if (number < 30) {
    this.score += 5 * number
  } else {
    this.score += 3 * number
  }
  console.log(`${this.name}击杀了${number}个zombie， 总得分${this.score}`)
})

player.emit('zombie', 5)
player.emit('zombie', 10)
