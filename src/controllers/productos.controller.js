const productosService = require('../services/productos.service');

const productosController = {
    registrarProducto: (req, res) => {
        const { nombre, precio_compra, precio_venta } = req.body;
        productosService.registrarProducto(nombre, precio_compra, precio_venta)
            .then(() => {
                res.json({ message: 'Producto registrado exitosamente' });
            })
            .catch(err => {
                res.status(500).json({ error: 'Error al registrar el producto' });
            });
    },

    obtenerProductos: async (req, res) => {
        try {
            const productos = await productosService.obtenerProductos();
            res.json(productos);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
            res.status(500).json({ error: 'Error al obtener los productos' });
        }
    }
};

module.exports = productosController;