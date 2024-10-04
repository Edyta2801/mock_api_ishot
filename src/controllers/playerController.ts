import { Request, Response } from 'express';
import { z } from 'zod';
import { Player } from '../models/Player';
import { PlayerJoinSessionResponse } from '../models/PlayerJoinSessionResponse';

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

export type PlayerDto = {
    playerId: string;
    nickname: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
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
        emailAddress: 'email@email.com',
    };

    return res.json(data);
}

export type UpdatePlayerDto = {
    playerId?: string;
    nickname?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    clerkId?: string;
    clerkUsername?: string;
    imageURL?: string;
};

export type UpdatePlayerResponse = {
    playerId: string;
    nickname: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
};

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
        emailAddress: 'updated@email.com',
    };

    return res.json(updatedData);
}
