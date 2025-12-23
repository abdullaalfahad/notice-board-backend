import { Request, Response, NextFunction } from 'express';
import { noticeServices } from './notice.services';

const createNotice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notice = await noticeServices.createNotice(req.body);
    res.status(201).json({ success: true, data: notice });
  } catch (error) {
    next(error);
  }
};

export const noticeControllers = {
  createNotice,
};
