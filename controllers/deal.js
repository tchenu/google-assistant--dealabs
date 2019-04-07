const dealabs = require('./../src/dealabs')
const LIMIT = 3

exports.index = (req, res, next) => {
    dealabs.getDeals(LIMIT, (data) => {
      res.json(data)
    })
    // res.json(data)
}

exports.getHotDeals = (req, res, next) => {
    let data = dealabs.getHotDeals()
  res.json(data)
}

exports.getMostCommentedDeals = (req, res, next) => {
    let data = dealabs.getMostCommentedDeals()
  res.json(data)
}
