import express, { Router } from 'express';
import {
    getPlayerScores,
    getDetailedPlayerScores,
    fetchScores,
    getScoreById,
    getDetailedScoreById,
    getRankedPlayerScores,
    // getRankedPlayerScores,
} from '../controllers/scoreController.js';

const router: Router = express.Router();
router.get('/GetPlayerScores', getPlayerScores);
router.get('/GetDetailedPlayerScores', getDetailedPlayerScores);
// router.get('/GetRankedPlayerScores', GetRankedPlayerScores);
router.get('/GetRankedPlayerScores', getRankedPlayerScores);
router.get('/GetDetailedScore', getDetailedScoreById);
router.get('/GetScore', getScoreById);
// router.get('/GetRankedPlayerScores', getRankedPlayerScores);
router.get('/sessions/:sessionId/:playerId/scores', fetchScores);

export default router;
