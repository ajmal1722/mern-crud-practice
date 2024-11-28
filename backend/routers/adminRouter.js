import express from 'express';
const router = express.Router()
import {
    adminLogin,
    adminSignup,
    getProducts,
    addProduct,
} from '../controllers/adminController.js';

router.post('/login', adminLogin);
router.post('/signup', adminSignup);

router.get('/get-products', getProducts);
router.post('/create-product', addProduct);

export default router;