import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from "../models/adminSchema.js";
import Product from '../models/productSchema.js';

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the admin exists
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        // Verify the password
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set token in cookies
        res.cookie('adminToken', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000, // 1 hour
        });

        // Send response
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
};

const adminSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body)

        const admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(409).json({ error: 'Admin already exist' })
        }

        const hashedPassowrd = await bcrypt.hash(password, 8);

        const newUser = new Admin({
            name, 
            email,
            password: hashedPassowrd
        })
        await newUser.save()

        res.status(201).json({ message: 'Admin is created successfully',
            user: {
                name, email
            }
        })
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ error: error.message });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products

        // Send a success response
        res.status(200).json({ products });
    } catch (error) {
        console.error('Error during fetching products:', error);

        // Send error response
        res.status(500).json({ error: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const data = req.body;

        // Create a new product in the database
        const product = await Product.create(data);

        // Send a success response
        res.status(201).json({ 
            message: 'Product created successfully!', 
            product 
        });
    } catch (error) {
        console.error('Error during creating product:', error);
        res.status(500).json({ error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;


    } catch (error) {
        console.error('Error during deleting product:', error);
        res.status(500).json({ error: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        
    } catch (error) {
        console.error('Error during updating product:', error);
        res.status(500).json({ error: error.message });
    }
}

export {
    adminLogin,
    adminSignup,
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct,
};