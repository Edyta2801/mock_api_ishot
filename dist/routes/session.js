import express from 'express';
import { getSessionByPlayerID, getSessionStatus, } from '../controllers/sessionController';
const router = express.Router();
router.get('/GetSessionStatus', getSessionStatus);
router.get('/GetSessionByPlayerID', getSessionByPlayerID);
export default router;
