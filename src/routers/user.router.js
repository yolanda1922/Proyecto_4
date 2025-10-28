import express from 'express';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;



