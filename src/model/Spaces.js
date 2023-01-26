const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    plate: String,
    driverName: String,
    model: String,
    color: String,
    space: String
})

const spaces = mongoose.model('spaces', DataSchema)

module.exports = spaces;