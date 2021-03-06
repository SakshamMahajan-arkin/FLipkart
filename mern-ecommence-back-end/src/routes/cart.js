const express = require('express');
const router = express.Router();
const category = require('../models/category');
const { addItemToCart } = require('../controllers/cart');
const { requireSignin, userMiddleware } = require('../common-middleware');

router.post('/user/cart/addtocart',requireSignin,userMiddleware,addItemToCart);


module.exports = router;