const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controller')

router.get('/',controller.getProduct);
router.post('/add',controller.addProduct)

module.exports = router