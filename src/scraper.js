const https = require('https')

exports.getHTML = (url) => {
    https.get(url, (res) => {

        let data = null

        res.on('data', (d) => {
            data += d
        })

        res.on('end', () => {
            console.log(data)
            return data
        })
    }).on('error', (e) => {
        return e.message
    })
}