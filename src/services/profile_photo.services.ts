import fs from 'fs/promises';
import path from 'path';
import { addPhoto } from '../entities/user.entity';

class AddPhotoService {
  async addPhoto(filename: string) {
    try {
      const projectRoot = process.cwd();
      const uploadsFolder = path.join(projectRoot, 'uploads');
      const filePath = path.join(uploadsFolder, filename);

      try {
        await fs.access(filePath);
      } catch (err) {
        throw new Error('File not found.');
      }

      const fileBuffer = await fs.readFile(filePath);
      // const blob = new Blob([fileBuffer], { type: 'image/jpeg' });
      const result = await addPhoto(fileBuffer);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default AddPhotoService;
