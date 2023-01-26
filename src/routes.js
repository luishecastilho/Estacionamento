const express = require('express');
const OverallController = require('./controller/OverallController');
const VehiclesController = require('./controller/VehiclesController');
const PaymentsController = require('./controller/PaymentsController');

const routes = express.Router()

// Overall
routes.get('/parking/overall', OverallController.index);

// Vehicles
routes.get('/parking/vehicles', VehiclesController.list);
routes.get('/parking/vehicles/now', VehiclesController.listNow);
routes.post('/parking/vehicles/in', VehiclesController.in);
routes.post('/parking/vehicles/out', VehiclesController.out);

// Payments
routes.get('/parking/payments', PaymentsController.list);
routes.get('/parking/payments/filter', PaymentsController.listFiltered);
routes.post('/parking/payments', PaymentsController.add);

module.exports = routes;