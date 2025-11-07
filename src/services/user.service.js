import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/user.model.js';
import { FileUtil } from '../utils/file.util.js';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'src/data/usuario.json');

export class UserService {
  static async getAllUsers() {
    return await FileUtil.readJsonFile(USERS_FILE);
  }

  static async getUserById(id) {
    const users = await this.getAllUsers();
    return users.find(user => user.id === id);
  }

  static async createUser(userData) {
    const errors = User.validate(userData);
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    const users = await this.getAllUsers();
    
    // Verificar email único
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      throw new Error('El email ya está registrado');
    }

    const newUser = new User(uuidv4(), userData.name, userData.email, userData.age);
    users.push(newUser);
    
    await FileUtil.writeJsonFile(USERS_FILE, users);
    return newUser;
  }

  static async updateUser(id, userData) {
    const errors = User.validate(userData);
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    const users = await this.getAllUsers();
    const userIndex = users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
      throw new Error('Usuario no encontrado');
    }

    // Verificar email único (excluyendo el usuario actual)
    const existingUser = users.find(user => user.email === userData.email && user.id !== id);
    if (existingUser) {
      throw new Error('El email ya está registrado');
    }

    users[userIndex] = { ...users[userIndex], ...userData, updatedAt: new Date().toISOString() };
    
    await FileUtil.writeJsonFile(USERS_FILE, users);
    return users[userIndex];
  }

  static async deleteUser(id) {
    const users = await this.getAllUsers();
    const userIndex = users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
      throw new Error('Usuario no encontrado');
    }

    const deletedUser = users.splice(userIndex, 1)[0];
    await FileUtil.writeJsonFile(USERS_FILE, users);
    return deletedUser;
  }
}