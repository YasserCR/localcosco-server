const db = require('../utils/db.config');

const ventasService = {
    registrarVenta: (producto_id, cantidad_vendida, fecha_venta) => {
        return new Promise((resolve, reject) => {
            db.query('CALL ActualizarInventarioVenta(?, ?, ?)', [producto_id, cantidad_vendida, fecha_venta], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
};

module.exports = ventasService;