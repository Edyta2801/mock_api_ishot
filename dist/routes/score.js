import express from 'express';
import { getPlayerScores, fetchScores, getRankedPlayerScores, } from '../controllers/scoreController.js';
const router = express.Router();
router.get('/GetPlayerScores', getPlayerScores);
// router.get('/GetRankedPlayerScores', GetRankedPlayerScores);
router.get('/RankedPlayerScores', getRankedPlayerScores);
router.get('/sessions/:sessionId/:playerId/scores', fetchScores);
export default router;
