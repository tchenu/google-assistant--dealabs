const scraper = require('./scraper')

const URL = 'https://www.dealabs.com'

// 'à la une'
exports.getDeals = () => {
    try {
        const html = scraper.getHTML(URL + '/')
        // console.log(html)
    } catch (e) {
        return e.message
    }
}

// 'hot'
exports.getHotDeals = () => {
    return 'getHotDeals'
}

// 'commentés'
exports.getMostCommentedDeals = () => {
    return 'getMostCommentedDeals'
}
