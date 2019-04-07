const dealabs = require('./../src/dealabs')
const LIMIT = 3

exports.index = (req, res, next) => {
    dealabs.getDeals(LIMIT, (err, data) => {
      if (err) {
        res.json({status: 500, message: err.message, data: null})
      } else {
        res.json({ status: 300, message: 'Success', data: data })
      }
    })
}

exports.getHotDeals = (req, res, next) => {
  dealabs.getHotDeals(LIMIT, (err, data) => {
    if (err) {
      res.json({ status: 500, message: err.message, data: null })
    } else {
      res.json({ status: 300, message: 'Success', data: data })
    }
  })
}

exports.getMostCommentedDeals = (req, res, next) => {
  dealabs.getMostCommentedDeals(LIMIT, (err, data) => {
    if (err) {
      res.json({ status: 500, message: err.message, data: null })
    } else {
      res.json({ status: 300, message: 'Success', data: data })
    }
  })
}
