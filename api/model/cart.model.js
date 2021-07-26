const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Cart = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
}, {
    collection: "carts"
})

const Carts = mongoose.model("Cart", Cart)
module.exports = {
    Carts
};