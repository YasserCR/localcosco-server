const express = require('express');
const router = express.Router();
const inventarioService = require('../services/inventario.service');

router.get('/', async (req, res) => {
    try {
        const inventario = await inventarioService.obtenerInventario();
        res.json(inventario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el inventario' });
    }
});

module.exports = router;