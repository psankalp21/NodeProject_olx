import fs from 'fs';
import path from 'path';

class AddPhotoService {
  async addPhoto(filename: string) {
    try {
      const projectRoot = process.cwd();
      const uploadsFolder = path.join(projectRoot, 'uploads');
      const filePath = path.join(uploadsFolder, filename);

      if (!fs.existsSync(filePath)) {
        throw new Error('File not found.');
      }
      const fileBuffer = fs.readFileSync(filePath);

      const blob = new Blob([fileBuffer], { type: 'image/jpeg' });
      console.log(blob)
      return blob;

   
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default AddPhotoService;
