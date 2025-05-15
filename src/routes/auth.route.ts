import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import '../docs/swaggerDocs';
import { validate } from '../middlewares/validate';
import { registerSchema } from '../validations/auth.validation';
const router = Router();

router.post('/register',validate(registerSchema), register); 
router.post('/login', login); 

export default router;
