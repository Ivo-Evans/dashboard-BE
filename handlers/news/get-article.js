const puppeteer = require("puppeteer")

async function getArticle(req, res, next) {
    try {
        const url = req.params[0]
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url)
        const story = await page.evaluate(() => {
            return document.querySelector(".story-body__inner").outerHTML
        })
        res.status(200).send(story)
    } catch {
        next()
    }
}

module.exports = getArticle