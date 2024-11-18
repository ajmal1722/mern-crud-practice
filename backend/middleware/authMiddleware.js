import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// dotenv.config();

const authMiddleware = (req, res, next) => {
    // Get token from cookies
    const token = req.cookies?.authToken; 
    // console.log('token,:', jwt.verify(token, process.env.JWT_SECRET))

    if (!token) {
        return res.status(401).json({ message: 'Authorization token required' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

export default authMiddleware;