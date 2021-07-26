const mongoose = require("mongoose");
const carts = require("../model/cart.model");

module.exports = {
    retrieve: (req, res) => {
        carts.Carts
            .find({})
            .populate("product")
            .then(result => {
                res.send(result);
            })
    },
    addToCart: (req, res) => {
        let Cart = mongoose.model('Cart');

        Cart.collection.insertOne(req.body, (err, result) => {
            if (err){
                return res.status(err.code).send({
                    message: err.message
                });
            } else {
                res.send(result)
            }
        })
    },
    update: (req, res) => {
        let update = {
            "$set": {
                "quantity": req.body.quantity
            }
        }
        let query = {
            "_id": req.body.id
        }
        let options = { returnNewDocument: true };
        carts.Carts
            .findOneAndUpdate(query, update, options)
            .then(result => {
                if(result) {
                    return res.send()
                }
                return res.status(404).send({
                    message: "Product not found!"
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message
                });
            })
    },
    delete: (req, res) => {
        carts.Carts
            .findOneAndDelete(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.status(err.code).send({
                    message: err.message
                });
            })
    }

}