import express from 'express';
const router = express.Router();

import {
  userRegister,
  userLogin,
  userLogout,
  getUserProfile,
} from '../controllers/user.controllers.js';

import userMeddleware from '../middlewares/user.meddlewares.js';

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/logout', userMeddleware, userLogout);
router.get('/profile', userMeddleware, getUserProfile);

export default router;
