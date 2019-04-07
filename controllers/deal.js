const dealabs = require('./../src/dealabs')
const DEFAULT_LIMIT = 3

exports.index = (req, res, next) => {
    let customLimit = typeof req.query.limit === 'undefined' ? DEFAULT_LIMIT : req.query.limit
    dealabs.getDeals(customLimit, (err, data) => {
      if (err) {
        res.json({ "fulfillmentText": err.message})
      } else {
        res.json({ "fulfillmentText": data[0]['title'] })
        // res.json({ status: 300, message: 'Success', data: data })
      }
    })
}

exports.getHotDeals = (req, res, next) => {
  let customLimit = typeof req.query.limit === 'undefined' ? DEFAULT_LIMIT : req.query.limit
  dealabs.getHotDeals(customLimit, (err, data) => {
    if (err) {
      res.json({ status: 500, message: err.message, data: null })
    } else {
      res.json({ status: 300, message: 'Success', data: data })
    }
  })
}

exports.getMostCommentedDeals = (req, res, next) => {
  let customLimit = typeof req.query.limit === 'undefined' ? DEFAULT_LIMIT : req.query.limit
  dealabs.getMostCommentedDeals(customLimit, (err, data) => {
    if (err) {
      res.json({ status: 500, message: err.message, data: null })
    } else {
      res.json({ status: 300, message: 'Success', data: data })
    }
  })
}
