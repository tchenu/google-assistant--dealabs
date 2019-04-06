const dealabs = require('./../src/dealabs')

exports.index = (req, res, next) => {
    let data = dealabs.getDeals()
    res.json(data)
}

exports.getHotDeals = (req, res, next) => {
    let data = dealabs.getHotDeals()
  res.json(data)
}

exports.getMostCommentedDeals = (req, res, next) => {
    let data = dealabs.getMostCommentedDeals()
  res.json(data)
}
