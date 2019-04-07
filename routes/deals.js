const express = require('express')
const router = express.Router()
const controller = require('../controllers/deal')

router.post('/', controller.index)
router.post('/hot', controller.getHotDeals)
router.post('/commented', controller.getMostCommentedDeals)

module.exports = router
