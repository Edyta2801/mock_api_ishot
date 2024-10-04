import express from 'express';
import { getPlayerScores, GetRankedPlayerScores, getDetailedPlayerScores, fetchScores, getScoreById,
// getRankedPlayerScores,
 } from '../controllers/scoreController.js';
const router = express.Router();
router.get('/GetPlayerScores', getPlayerScores);
router.get('/GetDetailedPlayerScores', getDetailedPlayerScores);
router.get('/GetRankedPlayerScores', GetRankedPlayerScores);
router.get('/GetScore', getScoreById);
// router.get('/GetRankedPlayerScores', getRankedPlayerScores);
router.get('/sessions/:sessionId/:playerId/scores', fetchScores);
export default router;
