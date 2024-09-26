import express from 'express';
const router = express.Router();
import {
    getPlayerData,
    updatePlayerData,
} from './controllers/playerController.js';

router.get('/GetPlayer', getPlayerData);

router.put('/UpdatePlayerData', updatePlayerData);

export default router;
