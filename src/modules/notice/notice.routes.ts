import { Router } from 'express';
import validate from '../../middlewares/validate.middleware';
import { createNoticeSchema } from './notice.validation';
import { noticeControllers } from './notice.controllers';

const router: Router = Router();

router.post('/', validate(createNoticeSchema), noticeControllers.createNotice);
router.get('/', noticeControllers.getNotices);
router.get('/:id', noticeControllers.getSingleNotice);

export const noticeRoutes = router;
