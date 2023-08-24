const ventasService = require('../services/ventas.service');

const ventasController = {
    registrarVenta: (req, res) => {
        const { producto_id, cantidad_vendida } = req.body;
        ventasService.registrarVenta(producto_id, cantidad_vendida)
            .then(() => {
                res.json({ message: 'Venta registrada exitosamente' });
            })
            .catch(err => {
                res.status(500).json({ error: 'Error al registrar la venta' });
            });
    }
};

module.exports = ventasController;