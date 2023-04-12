const express = require('express')
const { getUsersData, login, signUp } = require('../controller/authController')
const router = express.Router()

// let users = [
//     { name: 'user1', id: 1 },
//     { name: 'user2', id: 2 },
//     { name: 'user3', id: 3 },
//     { name: 'user4', id: 4 },
// ]

// let postData = [
//     { postName: "post 1", postId: 7, userId: 1 },
//     { postName: "post 2", postId: 8, userId: 1 },
//     { postName: "post 3", postId: 9, userId: 2 },
// ]


router.get('/getusersdata', getUsersData)
router.post('/signUp', signUp)
router.post('/logIn', login)





module.exports = router