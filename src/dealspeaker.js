exports.convert = (data, callback) => {
    let fulfillmentText = ''
    
    data.forEach((item) => {
        fulfillmentText += item['title'].replace('"', '') + ' à ' + item['price'] + ' '
    })

    return callback(fulfillmentText)
}