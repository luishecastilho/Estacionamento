const Vehicles = require('../model/Vehicles');

module.exports = {
    async list(req, res) {
        const vehicles = await Vehicles.find(); // similar to: "SELECT * FROM vehicles" in MySQL
        res.json(vehicles)
    },
    async listNow(req, res) {
        const vehicles = await Vehicles.find({paid: false}); // similar to: "SELECT * FROM vehicles" in MySQL
        res.json(vehicles)
    },
    async in(req, res) {
        const { driverName, plate, make, model, color, space, datetimeIn } = req.body;
        var data = {
            driverName,
            plate,
            make,
            model,
            color,
            space,
            datetimeIn
        }

        const vehicle = await Vehicles.create(data);
        res.json(vehicle)
    },
    async out(req, res) {
        const {id, datetimeOut, paid } = req.body;
        const vehicleId = body.id;
        delete body.id;

        const vehicle = await Vehicles.findByIdAndUpdate(vehicleId, body);

        // add payment
        
        res.json(vehicle)
    }
}