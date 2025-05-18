import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db/db.js';
import viewRoutes from './routes/viewRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

connectDB();

app.use('/api/views', viewRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
