import express from 'express';
const router = express.Router();

import {
  createBlog,
  getAllBlogs,
  deleteBlog,
} from '../controllers/blog.controllers.js';
import upload from '../config/multer.config.js';

router.post('/create', upload.single('image'), createBlog);
router.delete('/delete/:id', deleteBlog);
router.get('/all', getAllBlogs);

export default router;
