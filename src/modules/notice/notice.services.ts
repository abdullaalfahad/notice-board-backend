import { Notice } from './notice.model';

const createNotice = async (payload: any) => {
  return await Notice.create({
    ...payload,
    targetType: 'INDIVIDUAL',
  });
};

export const noticeServices = {
  createNotice,
};
