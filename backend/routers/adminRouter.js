import express from 'express';
const router = express.Router()
import {
    adminLogin,
    adminSignup,
} from '../controllers/adminController.js';

router.post('/login', adminLogin);
router.post('/signup', adminSignup)

export default router;