import { Request, Response, NextFunction } from 'express';
import { uploadServices } from './upload.services';

const uploadFiles = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      res.status(400).json({
        success: false,
        message: 'No files uploaded',
      });
      return;
    }

    const uploadedFiles = await uploadServices.processUploadedFiles(req.files);

    res.status(200).json({
      success: true,
      data: uploadedFiles,
    });
  } catch (error) {
    next(error);
  }
};

const deleteFileHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { publicId } = req.params;
    const { resourceType } = req.query;

    if (!publicId) {
      res.status(400).json({
        success: false,
        message: 'Public ID is required',
      });
      return;
    }

    const result = await uploadServices.deleteFile(
      publicId,
      (resourceType as string) || 'image'
    );

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMultipleFilesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { files } = req.body;

    if (!files || !Array.isArray(files) || files.length === 0) {
      res.status(400).json({
        success: false,
        message: 'No files provided for deletion',
      });
      return;
    }

    const results = await uploadServices.deleteMultipleFiles(files);

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadControllers = {
  uploadFiles,
  deleteFileHandler,
  deleteMultipleFilesHandler,
};