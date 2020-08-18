const $ = require('cheerio')
const rp = require('request-promise')
const url = 'https://juejin.im/books'

rp(url).then(function (html) {
  const books = $('.info', html)
  let totalSold = 0
  let totalSale = 0
  let totalBooks = books.length

  books.each(function () {
    const book = $(this)
    const price = $(book.find('.price-text'))
      .text()
      .replace('¥', '')
    const count = book
      .find('message')
      .last()
      .find('span')
      .text.split('人')[0]
    totalSale += Number(price) * Number(count)
    totalSold += Number(count)
  })

  console.log(`
    共有 ${totalBooks}本小册子
    共有 ${totalSold}人次购买
    约 ${Math.round(totalSale / 10000)}万
  `)
})
