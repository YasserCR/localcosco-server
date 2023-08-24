const express = require('express');
const comprasController = require('../controllers/compras.controller');

const router = express.Router();

router.post('/', comprasController.registrarCompra);

module.exports = router;