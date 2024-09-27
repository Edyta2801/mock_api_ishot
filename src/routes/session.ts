import express, { Router } from 'express';
import { getSessionStatus } from '../controllers/sessionController';

const router: Router = express.Router();

router.get('/GetSessionStatus', getSessionStatus);

export default router;
