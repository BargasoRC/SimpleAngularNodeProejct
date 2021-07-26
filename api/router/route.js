const express = require("express");
const routes = express.Router();
const path = require("path");
const product = require('../controllers/product.controller');
const cart = require('../controllers/cart.controller');


routes.route('/list').get((req, res) => product.retrieve(req.body, res));
// This is commented due to the database is already hosted, uncomment if you want to seed data locally
// routes.route('/add-product').get((req, res) => product.create(req.body, res));
routes.route('/product/:id').get((req, res) => product.retrieveById(req, res));
routes.route('/product/:id').get((req, res) => product.retrieveById(req, res));
routes.route('/product/search/:name').get((req, res) => product.search(req, res));

routes.route('/cart/add').post((req, res) => cart.addToCart(req, res))
routes.route('/cart').get((req, res) => cart.retrieve(req.body, res));
routes.route('/cart/update').post((req, res) => cart.update(req, res));
routes.route('/cart/delete').post((req, res) => cart.delete(req, res));

routes.route('/file/:name').get((req, res, next) => {
  var options = {
    root: path.join(__dirname, '../public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  var fileName = req.params.name
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

module.exports = routes
