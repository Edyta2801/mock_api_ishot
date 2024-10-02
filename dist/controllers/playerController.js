import { z } from 'zod';
import { Player } from '../models/Player';
const registerPlayerSchema = z.object({
    sessionID: z.string(),
    nickname: z.string().min(1, 'Nickname is required'),
});
export const registerPlayer = async (req, res) => {
    const parsedBody = registerPlayerSchema.safeParse(req.body);
    if (!parsedBody.success) {
        return res.status(400).json({ error: parsedBody.error.errors });
    }
    const { sessionID, nickname } = parsedBody.data;
    try {
        const playerId = await Player.create({ sessionID, nickname });
        const response = {
            success: true,
            playerID: playerId,
        };
        return res.status(201).json(response);
    }
    catch (error) {
        console.error('Error registering player:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
export function getPlayerData(req, res) {
    const playerId = req.query.playerID;
    res.json({ playerId: playerId, name: 'John Doe', rank: 5 });
}
export function updatePlayerData(req, res) {
    const playerData = req.body;
    res.json({ success: true, updatedPlayer: playerData });
}
