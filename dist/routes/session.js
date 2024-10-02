import express from 'express';
import { getSessionStatus } from '../controllers/sessionController';
const router = express.Router();
router.get('/GetSessionStatus', getSessionStatus);
export default router;
