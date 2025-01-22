import express from 'express';
const router = express.Router();

import {
  userRegister,
  userLogin,
  userLogout,
} from '../controllers/user.controllers.js';

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/logout', userLogout);

export default router;
