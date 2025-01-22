import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/connect.db.js';

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
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
