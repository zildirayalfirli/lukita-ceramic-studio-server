import express from 'express';
import { incrementView, getViewCount } from '../controllers/viewController.js';

const router = express.Router();

router.post('/', incrementView);
router.get('/', getViewCount);

export default router;
