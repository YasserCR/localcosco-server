const comprasService = require('../services/compras.service');

const comprasController = {
    registrarCompra: (req, res) => {
        const { producto_id, cantidad_comprada } = req.body;
        comprasService.registrarCompra(producto_id, cantidad_comprada)
            .then(() => {
                res.json({ message: 'Compra registrada exitosamente' });
            })
            .catch(err => {
                res.status(500).json({ error: 'Error al registrar la compra' });
            });
    }
};

module.exports = comprasController;