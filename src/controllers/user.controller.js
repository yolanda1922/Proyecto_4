import { UserService } from '../services/user.service.js';

export class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json({
        success: true,
        data: users,
        message: 'Usuarios obtenidos correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener usuarios',
        error: error.message
      });
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado'
        });
      }

      res.json({
        success: true,
        data: user,
        message: 'Usuario obtenido correctamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener usuario',
        error: error.message
      });
    }
  }

  static async createUser(req, res) {
    try {
      const userData = req.body;
      const newUser = await UserService.createUser(userData);
      
      res.status(201).json({
        success: true,
        data: newUser,
        message: 'Usuario creado correctamente'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Error al crear usuario',
        error: error.message
      });
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await UserService.updateUser(id, userData);
      
      res.json({
        success: true,
        data: updatedUser,
        message: 'Usuario actualizado correctamente'
      });
    } catch (error) {
      const status = error.message === 'Usuario no encontrado' ? 404 : 400;
      res.status(status).json({
        success: false,
        message: 'Error al actualizar usuario',
        error: error.message
      });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await UserService.deleteUser(id);
      
      res.json({
        success: true,
        data: deletedUser,
        message: 'Usuario eliminado correctamente'
      });
    } catch (error) {
      const status = error.message === 'Usuario no encontrado' ? 404 : 500;
      res.status(status).json({
        success: false,
        message: 'Error al eliminar usuario',
        error: error.message
      });
    }
  }
}