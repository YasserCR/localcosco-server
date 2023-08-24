const express = require('express');
const productosController = require('../controllers/productos.controller');

const router = express.Router();

router.post('/', productosController.registrarProducto);
router.get('/listar', productosController.obtenerProductos);

module.exports = router;