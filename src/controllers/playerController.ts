import { Request, Response } from 'express';
import { z } from 'zod';
import { Player } from '../models/Player';
import { PlayerJoinSessionResponse } from '../models/PlayerJoinSessionResponse';
import { PlayerDto } from './types';

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

// `${API_URL}/Player/GetPlayer?playerID=${playerId}`
export function getPlayerData(req: Request, res: Response) {
    const playerId = req.query.playerID;

    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }

    const data: PlayerDto = {
        playerId: '1',
        nickname: 'nick',
        firstName: 'Nick',
        lastName: 'Nikola',
        email: 'email@email.com',
        clerkId: '',
        clerkUsername: '',
        imageURL:
            'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhrOVZydlRZVWgxeU5uaXdibE5uQ1p4YjcifQ',
    };

    return res.json(data);
}

//   `${API_URL}/Player/UpdatePlayerData`,
export function updatePlayerData(req: Request, res: Response) {
    const { playerId, nickname, firstName, lastName, emailAddress } = req.body;

    if (!playerId || !nickname || !firstName || !lastName || !emailAddress) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const updatedData = {
        playerId: '1',
        nickname: 'UpdatedNick',
        firstName: 'UpdatedFirstName',
        lastName: 'UpdatedLastName',
        email: 'updated@email.com',
        clerkId: '',
        clerkUsername: '',
        imageURL: '',
    };

    return res.json(updatedData);
}
