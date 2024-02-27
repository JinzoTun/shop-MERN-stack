import express from 'express';
import { User } from '../Models/userModel.js';

const router = express.Router();

// route to add new User

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'All fields are required',
            });
        }

        const user = new User({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
        });

        await user.save();

        response.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;