import express from 'express';
const router = express.Router()
import {
    addProduct,
    adminLogin,
    adminSignup,
} from '../controllers/adminController.js';

router.post('/login', adminLogin);
router.post('/signup', adminSignup);

router.post('/create-product', addProduct);

export default router;