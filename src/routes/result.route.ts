
import { Router } from 'express';
import { createResultController, getResultsByUserController } from '../controllers/result.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { createResultSchema } from '../validations/result.validation';
import { validate } from '../middlewares/validate';
import { authorizeRole } from '../middlewares/role.middleware';

const router = Router();

router.post('/', authenticate, authorizeRole('user'), validate(createResultSchema), createResultController);
router.get('/', authenticate,authorizeRole('user'), getResultsByUserController);

export default router;
