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

const getNotices = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notices = await noticeServices.getAllNotices(req.query.status as string);
    res.json({ success: true, data: notices });
  } catch (error) {
    next(error);
  }
};

const getSingleNotice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notice = await noticeServices.getNoticeById(req.params.id as string);
    if (!notice) throw new Error('Notice not found');
    res.json({ success: true, data: notice });
  } catch (error) {
    next(error);
  }
};

export const noticeControllers = {
  createNotice,
  getNotices,
  getSingleNotice
};
