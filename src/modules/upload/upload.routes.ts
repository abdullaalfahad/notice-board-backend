import { Router } from 'express';
import { upload } from '../../config/multer';
import { uploadErrorHandler } from '../../middlewares/error.middleware';
import { uploadControllers } from './upload.controllers';

const router: Router = Router();

router.post('/', upload.array('files', 10), uploadControllers.uploadFiles);
router.delete('/delete/:publicId', uploadControllers.deleteFileHandler);
router.post('/delete-multiple', uploadControllers.deleteMultipleFilesHandler);

router.use(uploadErrorHandler);

export const uploadRoutes = router;