const scraper = require('./scraper')
const cheerio = require('cheerio')

const URL = 'https://www.dealabs.com'

// 'à la une'
exports.getDeals = (limit, callback) => {
    scraper.getHTML(URL, (err, data) => {
        if (err) {
            throw err
        }

        const $ = cheerio.load(data)
        let deals = []

        $('.threadGrid').slice(0, limit).each((i, el) => {
            let dealTitle = $(el).find('.thread-title').text()
            const dealPrice = $(el).find('.thread-price').text()

            dealTitle = dealTitle.substring(2) // remove \n\t

            deals[i] = {'title': dealTitle, 'price': dealPrice}
        })

        callback(deals)
    })
}

// 'hot'
exports.getHotDeals = () => {
    return 'getHotDeals'
}

// 'commentés'
exports.getMostCommentedDeals = () => {
    return 'getMostCommentedDeals'
}
