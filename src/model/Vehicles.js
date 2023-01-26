const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    driverName: String,
    plate: String,
    make: String,
    model: String,
    color: String,
    space: String,
    datetimeIn: String,
    datetimeOut: {type: String, default: ''},
    paid: {type: Boolean, default: false}
})

const vehicles = mongoose.model('vehicles', DataSchema)

module.exports = vehicles;