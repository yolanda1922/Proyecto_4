import { promises as fs } from 'fs';

export const readFile = async (path) => {
  try {
    return await fs.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error(`No pudimos abrir el archivo en la ruta ${path}`);
  }
};

export const writeFile = async (path, data) => {
  try {
    await fs.writeFile(path, data, 'utf-8');
  } catch (error) {
    throw new Error(`No pudimos escribir en el archivo en la ruta ${path}`);
  }
};