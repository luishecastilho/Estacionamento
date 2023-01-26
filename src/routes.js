const express = require('express');
const VehiclesController = require('./controller/VehiclesController');

const routes = express.Router()

routes.get('/parking/overall', (req, res) => {
    res.json({spaces: 10, vehicles: 8, freeSpaces: 2});
});

routes.get('/parking/spaces', (req, res) => {
    res.json({spaces: 10, freeSpaces: 2, busySpaces: 8});
});

routes.get('/parking/vehicles', VehiclesController.index);

module.exports = routes;