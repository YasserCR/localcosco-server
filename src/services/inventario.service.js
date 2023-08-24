const db = require('../utils/db.config');

const inventarioService = {
    obtenerInventario: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT producto.nombre, inventario.cantidad FROM producto INNER JOIN inventario ON producto.id_producto = inventario.id_producto',
                (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                }
            );
        });
    }
};

module.exports = inventarioService;