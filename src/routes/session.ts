import express, { Router } from 'express';
import {
    getSessionByPlayerID,
    getSessionStatus,
} from '../controllers/sessionController';

const router: Router = express.Router();

router.get('/GetSessionStatus', getSessionStatus);
router.get('/GetSessionByPlayerID', getSessionByPlayerID);

export default router;
