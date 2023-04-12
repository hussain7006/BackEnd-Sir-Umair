const mongoose = require('mongoose')


const dbConnection = async () => {
    try {
        mongoose.connect('mongodb+srv://hussain7006:huzooor123@cluster0.7nskjxk.mongodb.net/?retryWrites=true&w=majority', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("database connection has been established!");
            }
        })
    } catch (error) {
        console.log("err:", error.message);
    }
}

module.exports = dbConnection