const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    vehicleId: String,
    value: mongoose.Types.Decimal128,
    datetime: String,
    method: String
})

const payments = mongoose.model('payments', DataSchema)

module.exports = payments;