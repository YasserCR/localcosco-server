const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const routerVentas = require('./src/routes/ventas');
const routerCompras = require('./src/routes/compras');
const routerProductos = require('./src/routes/productos');
const routerInventario = require('./src/routes/inventario');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/venta', routerVentas)
app.use('/compra', routerCompras)
app.use('/producto', routerProductos)
app.use('/inventario', routerInventario);

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});