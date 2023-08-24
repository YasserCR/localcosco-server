const db = require('../utils/db.config');

const ventasService = {
    registrarVenta: (producto_id, cantidad_vendida) => {
        return new Promise((resolve, reject) => {
            db.query('CALL ActualizarInventarioVenta(?, ?)', [producto_id, cantidad_vendida], (err, result) => {
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