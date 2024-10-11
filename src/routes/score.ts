import express, { Router } from 'express';
import {
    getPlayerScores,
    getDetailedPlayerScores,
    fetchScores,
    getScoreById,
    getDetailedScoreById,
    getRankedPlayerScores,
    getSessionsScores,
} from '../controllers/scoreController.js';

const router: Router = express.Router();
router.get('/GetPlayerScores', getPlayerScores);
router.get('/GetDetailedPlayerScores', getDetailedPlayerScores);
router.get('/GetRankedPlayerScores', getRankedPlayerScores);
router.get('/GetDetailedScore', getDetailedScoreById);
router.get('/GetScore', getScoreById);
router.get('/sessions/:sessionId/:playerId/scores', fetchScores);
router.get('/GetSessionScores', getSessionsScores);

export default router;
