import { Notice } from './notice.model';

const createNotice = async (payload: any) => {
  return await Notice.create({
    ...payload,
    targetType: 'INDIVIDUAL',
  });
};

const getAllNotices = async (status?: string) => {
  const filter: any = { targetType: 'INDIVIDUAL' };
  if (status) filter.status = status;

  return await Notice.find(filter).sort({ createdAt: -1 });
};

const getNoticeById = async (id: string) => {
  return await Notice.findOne({ _id: id, targetType: 'INDIVIDUAL' });
};

export const noticeServices = {
  createNotice,
  getAllNotices,
  getNoticeById
};
