const dealabs = require('./../src/dealabs')
const dealspeaker = require('./../src/dealspeaker')
const DEFAULT_LIMIT = 1

exports.index = (req, res, next) => {
    let customLimit = typeof req.query.number === 'undefined' ? DEFAULT_LIMIT : req.query.number
    dealabs.getDeals(customLimit, (err, data) => {
      let fulfillmentText = 'An error is occured'
      dealspeaker.convert(data, (fulfillmentText) => {

        if (err) {
          res.json({ fulfillmentText: err.message })
        } else {
          res.json({ fulfillmentText: fulfillmentText })
        }
      })
    })
}

exports.getHotDeals = (req, res, next) => {
  let customLimit = typeof req.query.limit === 'undefined' ? DEFAULT_LIMIT : req.query.limit
  dealabs.getHotDeals(customLimit, (err, data) => {
    if (err) {
      res.json({ status: 500, 'message': err.message, data: null })
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
