const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    vehicleId: String,
    value: String,
    datetime: String,
    method: String
})

const payments = mongoose.model('payments', DataSchema)

module.exports = payments;