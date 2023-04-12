const mongoose = require('mongoose')


const authSchema = mongoose.Schema({
    email: {
        type: String,
    },
    userName: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "pasword required"]
    },

})

const authModel = mongoose.model('auth', authSchema)

module.exports = authModel