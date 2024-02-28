import express from 'express';

import { signIn, signUp, logout } from '../Controllers/auth.controller.js';


const router = express.Router();

router.post('/signup', signUp);

router.post('/login', signIn);

router.get('/logout', logout);


export default router;