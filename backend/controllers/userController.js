import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config()
const { JWT_SECRET } = process.env;
import User from "../models/userSchema.js";

// Cookie options
const cookieOptions = {
    httpOnly: true, // Prevents access to the cookie via JavaScript
    secure: process.env.NODE_ENV === 'production', // Ensures cookies are sent over HTTPS in production
    sameSite: 'strict', // Protects against CSRF attacks
    maxAge: 60 * 60 * 1000, // Cookie expiration time (1 hour)
};

// User Login
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'user does not exist' });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password.' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

        // Set token in cookie
        res.cookie('authToken', token, cookieOptions);

        res.status(200).json({ message: 'Login successful', token, user: { id: user._id, email: user.email, name: user.name } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
};

// User Sign Up
const userSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required.' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists.' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

        // Set token in cookie
        res.cookie('authToken', token, cookieOptions);

        res.status(201).json({ message: 'User created successfully', token, user: { id: newUser._id, email: newUser.email, name: newUser.name } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
};

const protectedRoute = async (req, res) => {
    try {
        res.status(200).json({ user: req.user, isAuthenticated: true });
    } catch (error) {
        res.status(500).json({ error: error.message, isAuthenticated: false })
    }
}

// Add to cart
const addToCart = async (req, res) => {
    try {
        const id = req.params.id;
        
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
};

export {
    userLogin,
    userSignUp,
    protectedRoute,
    addToCart,
}