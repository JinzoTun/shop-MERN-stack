import express from 'express';

import { getAllUsers, getUserById, updateUser, deleteUser, createUser } from '../Controllers/user.controller.js';


const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.post('/', createUser);



export default router;