const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helper');

const { signup,login} = require('../../controllers/auth/index');

router.post('/signup/',signup)
router.get('/login/',login)
// router.post('/admin/',adminLogin)


module.exports = router;