import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';

const router = Router();

// GET /api/users - Obtener todos los usuarios
router.get('/', UserController.getAllUsers);

// GET /api/users/:id - Obtener usuario por ID
router.get('/:id', UserController.getUserById);

// POST /api/users - Crear nuevo usuario
router.post('/', UserController.createUser);

// PUT /api/users/:id - Actualizar usuario
router.put('/:id', UserController.updateUser);

// DELETE /api/users/:id - Eliminar usuario
router.delete('/:id', UserController.deleteUser);

export default router;




