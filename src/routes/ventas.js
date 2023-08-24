const express = require('express');
const ventasController = require('../controllers/ventas.controller');

const router = express.Router();

router.post('/', ventasController.registrarVenta);

module.exports = router;
