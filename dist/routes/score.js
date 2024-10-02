import express from 'express';
import { getPlayerScores, fetchScores, } from '../controllers/scoreController.js';
const router = express.Router();
router.get('/GetPlayerScores', getPlayerScores);
router.get('/sessions/:sessionId/:playerId/scores', fetchScores);
export default router;
