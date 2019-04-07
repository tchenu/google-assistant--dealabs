const https = require('https')

exports.getHTML = (url, callback) => {
    https.get(url, (res) => {
        let data = null

        res.on('data', (d) => {
            data += d
        })

        res.on('end', () => {
            callback(null, data)
        })
    }).on('error', (e) => {
        callback(e, null)
    })
}