const Vehicles = require('../model/Vehicles');

module.exports = {
    async index(req, res) {
        const vehicles = await Vehicles.find(); // similar to: "SELECT * FROM vehicles" in MySQL
        res.json(vehicles)
    }
}