const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

const routes = require('./src/routes')

const app = express()

app.use(cors()) // cors protection
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3333, function () {
    console.log('running')   
})