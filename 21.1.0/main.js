import puppeteer from 'puppeteer';

(async () =>{
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://example.com/')
  await page.click('a')
  await page.goBack()

  const entry = await page.evaluate(() => performance.getEntries()[0].toJSON())

  await browser.close()

  console.log(entry.type) // 'back_forward'
})()
