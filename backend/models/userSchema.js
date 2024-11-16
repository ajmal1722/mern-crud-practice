import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true 
        },
        email: {
            type: String, 
            required: true, 
            unique: true
        },
        password: {
            type: String, 
            required: true
        },
        cart: [
            {
                item: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number, 
                    default: 1
                },
            },
        ],
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;