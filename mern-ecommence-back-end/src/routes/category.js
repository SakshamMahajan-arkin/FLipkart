const express = require('express');
const router = express.Router();
const category = require('../models/category');
const { addCategory, getCategories } = require('../controllers/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');

router.post('/category/create',requireSignin,adminMiddleware,addCategory);
router.get('/category/getcategory',getCategories);

module.exports = router;