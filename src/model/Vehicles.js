const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    driverName: String,
    plate: String,
    model: String,
    color: String,
    space: String
})

const vehicles = mongoose.model('vehicles', DataSchema)

module.exports = vehicles;