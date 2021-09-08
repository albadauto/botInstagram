const puppeteer = require('puppeteer');

(async () => {
    try{
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage()
        await page.goto('https://instagram.com')
        await page.waitForSelector('#loginForm > div > div:nth-child(1) > div > label > input')
        await page.type('#loginForm > div > div:nth-child(1) > div > label > input', 'albadauto')
        await page.type('#loginForm > div > div:nth-child(2) > div > label > input', 'albarraz2001')
        await page.click('#loginForm > div > div:nth-child(3) > button > div')
        delay(50000)
        await page.waitForSelector('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.LWmhU._0aCwM > input')
        await page.type('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.LWmhU._0aCwM > input', 'deathanyart')
    }catch(e){
        console.log(e)
    }
})();


function delay(time){
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}