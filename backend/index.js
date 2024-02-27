import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoute from './routes/product.routes.js';
import userRoute from './routes/user.routes.js';
import cors from "cors";
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/product', productRoute);

app.use('/user', userRoute);

// connect to Mongodb and console logging

mongoose.connect(MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error connecting to MongoDB:', err.message);
    });
