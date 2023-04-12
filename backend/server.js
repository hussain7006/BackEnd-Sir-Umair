const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dbConnection = require('./config/db')

const mainrouter = require('./routes/mainRoute')

const PORT = 5000
const app = express();
const urlParser = express.json()

app.use(urlParser)
app.use(cors())

app.use(mainrouter)

dbConnection()

app.get('/', (req, res) => {
    console.log("server started");
})


app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);
})