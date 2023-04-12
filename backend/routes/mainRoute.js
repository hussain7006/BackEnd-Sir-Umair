const express = require('express')
const router = express.Router()


const authrouter = require('./authRoute');
const postroute = require('./postRoute');


router.use('/auth', authrouter)
router.use('/post', postroute)


module.exports = router