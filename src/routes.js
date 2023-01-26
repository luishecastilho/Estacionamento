const express = require('express');
const VehiclesController = require('./controller/VehiclesController');

const routes = express.Router()

routes.get('/parking/overall', (req, res) => {
    res.json({spaces: 10, vehicles: 8, freeSpaces: 2});
});

routes.get('/parking/spaces', (req, res) => {
    res.json({spaces: 10, freeSpaces: 2, busySpaces: 8});
});

// Vehicles
routes.get('/parking/vehicles', VehiclesController.list);
routes.get('/parking/vehicles/now', VehiclesController.listNow);
routes.post('/parking/vehicles/in', VehiclesController.in);
routes.put('/parking/vehicles/out', VehiclesController.out);


module.exports = routes;