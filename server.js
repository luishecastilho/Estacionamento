require('dotenv').config();

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./src/routes')

const app = express()

mongoose.connect(process.env.MONGODB_URL,
    function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Connected to MongoDB')
        }
    }
)

app.use(cors()) // cors protection
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3333, function () {
    console.log('running')   
})