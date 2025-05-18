import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db/db.js';
import viewRoutes from './routes/viewRoute.js';

dotenv.config();

const PORT = process.env.PORT || 9000;
const app = express();

app.use(
  cors({
    origin: 'https://lukita-ceramic-studio.vercel.app/',
    credentials: true,
  })
);
app.use(express.json());

app.use('/api/views', viewRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening for requests on port: ${PORT}`);
    });
});