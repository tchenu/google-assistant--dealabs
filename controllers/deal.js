const dealabs = require('./../src/dealabs')
const dealspeaker = require('./../src/dealspeaker')
const DEFAULT_LIMIT = 1

exports.index = (req, res, next) => {
    let customLimit = typeof req.body.queryResult.parameters['number'] === 'undefined' ? DEFAULT_LIMIT : req.body.queryResult.parameters['number']
    dealabs.getDeals(customLimit, (err, data) => {
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
  let customLimit = typeof req.body.queryResult.parameters['number'] === 'undefined' ? DEFAULT_LIMIT : req.body.queryResult.parameters['number']
  dealabs.getHotDeals(customLimit, (err, data) => {
    dealspeaker.convert(data, (fulfillmentText) => {
      if (err) {
        res.json({ fulfillmentText: err.message })
      } else {
        res.json({ fulfillmentText: fulfillmentText })
      }
    })
  })
}

exports.getMostCommentedDeals = (req, res, next) => {
  let customLimit = typeof req.body.queryResult.parameters['number'] === 'undefined' ? DEFAULT_LIMIT : req.body.queryResult.parameters['number']
  dealabs.getMostCommentedDeals(customLimit, (err, data) => {
    dealspeaker.convert(data, (fulfillmentText) => {
      if (err) {
        res.json({ fulfillmentText: err.message })
      } else {
        res.json({ fulfillmentText: fulfillmentText })
      }
    })
  })
}