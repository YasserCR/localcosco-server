const db = require('../utils/db.config');

const productosService = {
    registrarProducto: (nombre, precio_compra, precio_venta) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO producto (nombre, precio_compra, precio_venta) VALUES (?, ?, ?)',
                [nombre, precio_compra, precio_venta],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        const nuevoProductoId = result.insertId;
                        // Después de insertar el producto, registra en el inventario con cantidad 0
                        db.query('INSERT INTO inventario (id_producto, cantidad) VALUES (?, ?)',
                            [nuevoProductoId, 0],
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve();
                                }
                            }
                        );
                    }
                }
            );
        });
    },

    obtenerProductos: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM producto ORDER BY nombre', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },

};

module.exports = productosService;