import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/connectDB.js';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

dotenv.config();

const port = 5000;
const app = express();

// Connecting MongoDB
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny')); // Logging requests

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})