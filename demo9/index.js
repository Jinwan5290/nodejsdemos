const puppeteer = require('puppeteer')

async function getHomePage (link) {
  const browser = await puppeteer.launch({ headless: false })

  const page = await browser.newPage()

  await page.goto(link)

  await page.setViewport({ width: 1080, height: 250 })

  await page.screenshot({ path: Date.now() + '.png' })
  // await page.screenshot({ path: Date.now() + '.png' })

  await browser.close()

  return 'done!'
}

getHomePage('https://juejin.im/books').then(v => {})
