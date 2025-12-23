import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import mongoose from 'mongoose';
import { logger } from '../config/logger';

const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: (err as any)?.flatten()?.fieldErrors?.body[0],
    });
  }

  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      success: false,
      message: 'Invalid ID format',
    });
  }

 
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: 'Duplicate field value',
      fields: err.keyValue,
    });
  }


  if (err.message) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};

export default errorMiddleware;
