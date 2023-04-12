const bcrypt = require('bcrypt');
const authModel = require("../model/authModel");


let users = [
    { name: 'user1', id: 1 },
    { name: 'user2', id: 2 },
    { name: 'user3', id: 3 },
    { name: 'user4', id: 4 },
]

const getUsersData = (req, res) => {
    console.log("In getUsersData");
    try {
        res.status(200).send({ success: true, data: users, message: "Fetched users data successfully" })
    } catch (error) {
        res.status(200).send({ success: false, message: error.message })
    }

}


const login = async (req, res) => {
    console.log("In login");

    try {
        const { email, userName, password } = req.body
        const checkUser = await authModel.findOne({ "email": email })


        if (checkUser) {

            const match = await bcrypt.compare(password, checkUser.password, (err, res) => {
                console.log("res:", res);
            });

            console.log("match:", match);

            if (match) {
                res.status(200).send({ success: true, message: "Login successfully" })
            } else {
                res.status(200).send({ success: false, message: "Wrong password" })
            }



        } else {
            res.status(200).send({ success: false, message: "Users not found" })
        }


    } catch (error) {
        res.status(200).send({ success: false, message: error.message })
    }

}
const signUp = async (req, res) => {
    console.log("In signUp");

    try {
        const { email, userName, password } = req.body

        const checkEmail = await authModel.findOne({ "email": email })

        if (checkEmail) {
            res.status(200).send({ success: false, message: "email duplication" })
        } else {

            const hashPass = await bcrypt.hash(password, 12)

            const result = new authModel({ email, userName, password: hashPass })

            result.save().then((response) => {
                res.status(200).send({ data: response, success: true, message: "SignUp successfully" })
            }).catch((err) => {
                console.log("11:", err);
                res.status(200).send({ success: false, message: err.message })
            })
        }

    } catch (error) {
        // console.log(error);
        res.status(200).send({ success: false, message: error.message })
    }
}

module.exports = {
    getUsersData,
    login,
    signUp
}