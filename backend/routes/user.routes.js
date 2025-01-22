import express from 'express';
const router = express.Router();

import {
  userRegister,
  userLogin,
  userLogout,
} from '../controllers/user.controllers.js';

import userMeddleware from '../middlewares/user.meddlewares.js';

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/logout', userMeddleware, userLogout);

export default router;
