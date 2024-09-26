import express from 'express';
const router = express.Router();
import { getPlayerScores } from './controllers/scoreController.js';
router.get('/GetPlayerScores', getPlayerScores);
export default router;
