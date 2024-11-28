import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,  
    },
    title: {
        type: String,
        required: true,  
    },
    brand: {
        type: String,
        required: true,  
    },
    rating: {
        type: Number,
        min: 0, // Optional validation for minimum value
        max: 5, // Optional validation for maximum value
    },
    price: {
        type: Number,
        required: true,  
        min: 0, // Optional validation for minimum value
    },
    discountPrice: {
        type: Number,
        required: true, 
        validate: {
            validator: function (value) {
                // Ensure discountPrice is less than or equal to price
                return value <= this.price;
            },
            message: "Discount price must be less than or equal to the price.",
        },
        min: 0, // Optional validation for minimum value
    },
});

const Product = mongoose.model("Product", productSchema);

export default Product;