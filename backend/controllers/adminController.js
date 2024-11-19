import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from "../models/adminSchema.js";

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

export {
    adminLogin
};