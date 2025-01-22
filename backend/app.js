import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/connect.db.js';

dotenv.config();

const app = express();
connectDB();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

import userRoutes from './routes/user.routes.js';
import blogRoutes from './routes/blog.routes.js';

app.use('/api/user', userRoutes);

app.use('/api/blog', blogRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
