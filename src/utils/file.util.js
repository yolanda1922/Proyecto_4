import fs from 'fs/promises';
import path from 'path';

export class FileUtil {
  static async readJsonFile(filePath) {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      }
      throw error;
    }
  }

  static async writeJsonFile(filePath, data) {
    try {
      const dirPath = path.dirname(filePath);
      await fs.mkdir(dirPath, { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      throw error;
    }
  }
}