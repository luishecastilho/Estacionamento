const Payments = require('../model/Payments');

module.exports = {
    async list (req, res) {
        const payments = await Payments.find();
        res.json(payments)
    },
    async listFiltered (req, res) {
        var filter = {};
        if(req.query.filter == "today") {

        } else if(req.query.filter == "week") {
        
        } else if(req.query.filter == "month") {

        }

        const payments = await Payments.find(filter)
        res.json(payments)
    },
    async add (req, res) {
        const { vehicleId, value, method } = req.body;        
        const datetime = new Date(Date.now()).toISOString().replace("T", " ").split(".")[0];

        var data = {
            vehicleId,
            value,
            method,
            datetime
        }

        const payment = await Payments.create(data);
        res.json(payment)
    }
}
