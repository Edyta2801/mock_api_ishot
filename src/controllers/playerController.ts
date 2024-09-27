import { Request, Response } from 'express';
import { z } from 'zod';
import { Player } from '../models/Player';
import { PlayerJoinSessionResponse } from '../models/PlayerJoinSEssionResponse';

const registerPlayerSchema = z.object({
    sessionID: z.string(),
    nickname: z.string().min(1, 'Nickname is required'),
});

export const registerPlayer = async (req: Request, res: Response) => {
    const parsedBody = registerPlayerSchema.safeParse(req.body);

    if (!parsedBody.success) {
        return res.status(400).json({ error: parsedBody.error.errors });
    }

    const { sessionID, nickname } = parsedBody.data;

    try {
        const playerId = await Player.create({ sessionID, nickname });

        const response: PlayerJoinSessionResponse = {
            success: true,
            playerID: playerId,
        };

        return res.status(201).json(response);
    } catch (error) {
        console.error('Error registering player:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export function getPlayerData(
    req: { query: { playerID: any } },
    res: { json: (arg0: { playerId: any; name: string; rank: number }) => void }
) {
    const playerId = req.query.playerID;
    res.json({ playerId: playerId, name: 'John Doe', rank: 5 });
}

export function updatePlayerData(
    req: { body: any },
    res: { json: (arg0: { success: boolean; updatedPlayer: any }) => void }
) {
    const playerData = req.body;
    res.json({ success: true, updatedPlayer: playerData });
}
