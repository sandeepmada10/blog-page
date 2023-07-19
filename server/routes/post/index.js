
const express = require('express');

const router = express.Router();
const {verifyToken} = require('../../helper/index')


const { add,getdata,postUpdate,postDelete} = require('../../controllers/post/index');

router.post('/add',verifyToken,add)
router.get('/getpost',getdata)
router.put('/update/:id',verifyToken,postUpdate)
router.delete('/delete/:id',verifyToken,postDelete)
module.exports = router;

