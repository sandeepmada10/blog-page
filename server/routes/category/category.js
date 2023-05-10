const express = require('express');

const router = express.Router();


const { add } = require('../../controllers/category/index')
router.post('/add/',add)
module.exports = router;