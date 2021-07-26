const mongoose = require("mongoose");
const products = require("../model/product.model");

module.exports = {
    retrieve: (req, res) => {
        products.Products.find({}, (err, result) => {
            res.send(result);
        })
    },
    retrieveById: (req, res) => {
        products.Products.findById(req.params.id, (err, result) => {
            res.send(result);
        })
    },
    search: (req, res) => {
        products.Products.find({name: new RegExp('^'+req.params.name+'$', "i")})
        .then( result => {
           res.send(result); 
        })
        .catch( err => {
            return res.status(err.code).send({
                message: err.message
            });
        })
    },
    create: (req, res) => {
        /**
         * This is commented due to the database is already hosted, uncomment if you want to seed data locally
        let Product = mongoose.model('Product');
        
        let product = [
            {
                name: "Sirloin",
                price: 100,
                description: "Japanese sirloin meat product",
                currency: "$",
                quantity: 5,
                src: [
                    "sirloin.jpg",
                    "sirloin1.jpg",
                    "sirloin2.jfif",
                    "sirloin3.jpg"
                ]
            },
            {
                name: "Wagyu",
                price: 250,
                description: "Japanese wagyu A5 grade.",
                currency: "$",
                quantity: 5,
                src: [
                    "wagyu.jpg",
                    "wagyu1.jpg",
                    "wagyu2.jpg",
                    "wagyu3.jpg",
                    "wagyu4.jpg"
                ]
            },
            {
                name: "Bacon",
                price: 70,
                description: "Traditionally home made sweetened bacon.",
                currency: "$",
                quantity: 5,
                src: [
                    "bacon.jpg",
                    "bacon1.jpg",
                    "bacon2.jpg",
                    "bacon3.jpg",
                    "bacon4.jpg"
                ]
            },
            {
                name: "Dress Chicken",
                price: 120,
                description: "Raised with high omega 3 and ADHD foods.",
                currency: "$",
                quantity: 5,
                src: [
                    "dress-chicken.jpg",
                    "dress-chicken1.jpg",
                    "dress-chicken2.jpg",
                    "dress-chicken3.jpg",
                    "dress-chicken4.jpg",
                ]
            },
            {
                name: "Goat Meat",
                price: 130,
                description: "Raised with high fiber grass.",
                currency: "$",
                quantity: 5,
                src: [
                    "goat-meat.jpeg",
                    "goat-meat1.jpg",
                    "goat-meat2.jpg",
                    "goat-meat3.jpg",
                    "goat-meat4.jpg",
                ]
            }
        ]

        Product.collection.insertMany(product, (err, result) => {
            if (err){
                res.send(err)
            } else {
                res.send(result)
            }
        })
        */
    }
}
