import express from 'express';
const router = express.Router();
import { getPlayerData, updatePlayerData, registerPlayer, } from '../controllers/playerController.js';
router.get('/GetPlayer', getPlayerData);
router.put('/UpdatePlayerData', updatePlayerData);
router.post('/Player/Register', registerPlayer);
export default router;
