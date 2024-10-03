import express, { Router } from 'express';
import {
    getPlayerScores,
    GetRankedPlayerScores,
    fetchScores,
} from '../controllers/scoreController.js';

const router: Router = express.Router();
router.get('/GetPlayerScores', getPlayerScores);
router.get('/GetRankedPlayerScores', GetRankedPlayerScores);
router.get('/sessions/:sessionId/:playerId/scores', fetchScores);

export default router;
