const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Product = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    src: [
        {
            type: String,
            required: true
        }
    ]
}, {
    collection: "products"
});

const Products = mongoose.model("Product", Product);
module.exports = {
    Products
};
