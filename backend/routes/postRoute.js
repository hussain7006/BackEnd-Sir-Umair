const express = require('express')

const router = express.Router()


let postData = [
    { postName: "post 1", postId: 7, userId: 1 },
    { postName: "post 2", postId: 8, userId: 1 },
    { postName: "post 3", postId: 9, userId: 2 },
]

router.get('/getuserpost', (req, res) => {
    let userPost = postData.filter((item) => item.userId == 1)
    res.status(200).send({ success: true, data: userPost, message: "users Post fetched successfully" })
})



module.exports = router