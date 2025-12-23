import { Router } from 'express';
import validate from '../../middlewares/validate.middleware';
import { createNoticeSchema, updateStatusSchema } from './notice.validation';
import { noticeControllers } from './notice.controllers';

const router: Router = Router();

router.post('/', validate(createNoticeSchema), noticeControllers.createNotice);
router.get('/', noticeControllers.getNotices);
router.get('/:id', noticeControllers.getSingleNotice);
router.patch('/:id/status', validate(updateStatusSchema), noticeControllers.updateStatus);

export const noticeRoutes = router;
