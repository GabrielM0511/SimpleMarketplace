// CWEB Project 3
// Participants: Gabriel & Navkaran

// Variables
const mongoose = require('mongoose')


const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Missing a product name"]
        },
        description: {
            type: String,
            required: [true, "Missing a product description"] 
        },
        manufacturer: {
            type: String,
            required: false,
        },
        quantity: {
            type: Number,
            required: [true, "Missing a product quantity"],
            default: 1
        },
        price: {
            type: Number,
            required: [true, "Missing a product price"],
        },
        image: {
            type: String,
            required: [true, "Missing a product image"],
        },
        condition: {
            type: String,
            required: [true, "Missing a product condition ('new' or 'used')"], 
        },
        rating: {
            type: Number,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;