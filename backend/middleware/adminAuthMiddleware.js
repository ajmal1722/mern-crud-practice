import jwt from 'jsonwebtoken';

const adminAuthMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.adminToken;

        if (!token) {
            return res.status(401).json({ message: 'Authorization token required' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}