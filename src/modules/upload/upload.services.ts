import cloudinary from '../../config/cloudinary';
import { UploadedFile, DeleteResult } from '../../types/upload.types';

const processUploadedFiles = async (
  files: Express.Multer.File[]
): Promise<UploadedFile[]> => {
  if (!files || files.length === 0) {
    throw new Error('No files provided');
  }

  const uploadedFiles = files.map((file: any) => ({
    filename: file.originalname,
    url: file.path,
    publicId: file.filename,
    format: file.format,
    size: file.size,
    resourceType: file.resource_type,
  }));

  return uploadedFiles;
};

const deleteFile = async (
  publicId: string,
  resourceType: string = 'image'
): Promise<DeleteResult> => {
  try {
    const result = await cloudinary().uploader.destroy(publicId, {
      resource_type: resourceType,
    });

    return result;
  } catch (error) {
    throw new Error(
      `Failed to delete file: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};

const deleteMultipleFiles = async (
  files: Array<{ publicId: string; resourceType: string }>
): Promise<DeleteResult[]> => {
  const deletePromises = files.map((file) =>
    deleteFile(file.publicId, file.resourceType)
  );

  return Promise.all(deletePromises);
};

const validateFileSize = (
  file: Express.Multer.File,
  maxSizeInMB: number = 5
): boolean => {
  const maxSize = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSize;
};

const validateFileType = (
  file: Express.Multer.File,
  allowedTypes: string[]
): boolean => {
  return allowedTypes.includes(file.mimetype);
};

export const uploadServices = {
  processUploadedFiles,
  deleteFile,
  deleteMultipleFiles,
  validateFileSize,
  validateFileType,
};