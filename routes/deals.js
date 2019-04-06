const express = require('express')
const router = express.Router()
const controller = require('../controllers/deal')

router.get('/', controller.index)
router.get('/hot', controller.getHotDeals)
router.get('/commented', controller.getMostCommentedDeals)

module.exports = router
