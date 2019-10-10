const express = require('express');

const routes = express.Router();

const ProductsController = require('./controllers/ProductController');
//definindo routes
routes.get("/products", ProductsController.index);
routes.post('/products',ProductsController.store);
routes.get('/products/:id', ProductsController.show);
routes.put("/products/:id", ProductsController.update);
routes.delete("/products/:id", ProductsController.destroy);
module.exports = routes;