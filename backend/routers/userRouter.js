import express from 'express';
const router = express.Router()
import {
    userLogin,
    userSignUp,
    addToCart,
} from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

router.post('/login', userLogin);
router.post('/signup', userSignUp);

// Auth middleware
router.use(authMiddleware);

router.get('/add-to-cart/:id', addToCart);

export default router;