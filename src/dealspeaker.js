exports.convert = (data, callback) => {
    let fulfillmentText = ''
    
    data.forEach((item) => {
        fulfillmentText += item['title'] + ' à ' + item['price'] + ' '
    })

    return callback(fulfillmentText)
}