const scraper = require('./scraper')
const cheerio = require('cheerio')

const URL = 'https://www.dealabs.com'

// 'à la une'
exports.getDeals = (limit, callback) => {
    scraper.getHTML(URL, (err, data) => {
        if (err) {
            return callback(err, null)
        }

        const $ = cheerio.load(data)
        let deals = []

        $('.threadGrid').slice(0, limit).each((i, el) => {
            
            let dealTitle = $(el).find('.thread-title').text()
            let dealPrice = $(el).find('.thread-price').text()

            dealTitle = dealTitle.substring(2) // remove \n\t

            if (dealPrice == '') {
                dealPrice = 'Gratuit'
            }

            deals[i] = {'title': dealTitle, 'price': dealPrice}
        })

        callback(null, deals)
    })
}

// 'hot'
exports.getHotDeals = (limit, callback) => {
    scraper.getHTML(URL + '/hot', (err, data) => {
        if (err) {
            return callback(err, null)
        }

        const $ = cheerio.load(data)
        let deals = []

        $('.threadGrid').slice(0, limit).each((i, el) => {

            let dealTitle = $(el).find('.thread-title').text()
            let dealPrice = $(el).find('.thread-price').text()

            dealTitle = dealTitle.substring(2) // remove \n\t

            if (dealPrice == '') {
                dealPrice = 'Gratuit'
            }

            deals[i] = { 'title': dealTitle, 'price': dealPrice }
        })

        callback(null, deals)
    })
}

// 'commentés'
exports.getMostCommentedDeals = (limit, callback) => {
    scraper.getHTML(URL + '/commentes', (err, data) => {
        if (err) {
            return callback(err, null)
        }

        const $ = cheerio.load(data)
        let deals = []

        $('.threadGrid').slice(0, limit).each((i, el) => {

            let dealTitle = $(el).find('.thread-title').text()
            let dealPrice = $(el).find('.thread-price').text()

            dealTitle = dealTitle.substring(2) // remove \n\t

            if (dealPrice == '') {
                dealPrice = 'Gratuit'
            }

            deals[i] = { 'title': dealTitle, 'price': dealPrice }
        })

        callback(null, deals)
    })
}
