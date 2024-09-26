import express from 'express';
const router = express.Router();
import { getSessionStatus } from './controllers/sessionController.js';
router.get('/GetSessionStatus', getSessionStatus);
export default router;
