import { readFile, writeFile } from "../utils/file.util.js";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { v4 as uuidv4 } from 'uuid';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PATH_USERS = join(__dirname, '../../data/usuario.json'); // <- subimos dos niveles

export const getAllUsersServices = async () => {
  try {
    const dataUsers = await readFile(PATH_USERS);
    return JSON.parse(dataUsers);
  } catch (error) {
    return []; // si no hay archivo o está vacío, devolvemos array vacío
  }
};

export const createUserService = async (user) => {
  console.log("Creating user:", user);
  const users = await getAllUsersServices();
  user.id = uuidv4(); // usar UUID para el id
  users.push(user);
  await writeFile(PATH_USERS, JSON.stringify(users, null, 2));
  return user;
};

export const updateUserService = async (id, userData) => {
  const users = await getAllUsersServices();
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...userData, id };
  await writeFile(PATH_USERS, JSON.stringify(users, null, 2));
  return users[idx];
};

export const deleteUserService = async (id) => {
  const users = await getAllUsersServices();
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return false;
  users.splice(idx, 1);
  await writeFile(PATH_USERS, JSON.stringify(users, null, 2));
  return true;
};