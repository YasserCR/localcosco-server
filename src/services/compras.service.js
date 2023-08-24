const db = require('../utils/db.config');

const comprasService = {
    registrarCompra: (producto_id, cantidad_comprada) => {
        return new Promise((resolve, reject) => {
            db.query('CALL ActualizarInventarioCompra(?, ?)', [producto_id, cantidad_comprada], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
};

module.exports = comprasService;