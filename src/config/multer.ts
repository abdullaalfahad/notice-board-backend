import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary';
import { Request } from 'express';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary(),
  params: async (req: Request, file: Express.Multer.File) => {
    const isPdf = file.mimetype === 'application/pdf';
    
    return {
      folder: 'uploads',
      allowed_formats: ['jpg', 'jpeg', 'png', 'pdf'],
      resource_type: isPdf ? 'raw' : 'image',
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
    } as any;
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
  
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPG, PNG, and PDF are allowed.'));
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});