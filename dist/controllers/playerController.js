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
// `${API_URL}/Player/GetPlayer?playerID=${playerId}`
// export function getPlayerData(req: Request, res: Response) {
//     const playerId = req.query.playerID;
//     if (!playerId) {
//         return res.status(400).json({ error: 'playerID is required' });
//     }
//     const data: PlayerDto = {
//         playerId: '1',
//         nickname: 'nick',
//         firstName: 'Nick',
//         lastName: 'Nikola',
//         email: 'email@email.com',
//         clerkId: '',
//         clerkUsername: '',
//         imageURL:
//             'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhrOVZydlRZVWgxeU5uaXdibE5uQ1p4YjcifQ',
//     };
//     return res.json(data);
// }
// `${API_URL}/Player/GetPlayer?playerID=${playerId}`
export function getPlayerData(req, res) {
    const playerId = req.query.playerID;
    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }
    const players = {
        '1': {
            playerId: '1',
            nickname: 'nick1',
            firstName: 'Nick',
            lastName: 'Nikola',
            email: 'nick1@email.com',
            clerkId: '',
            clerkUsername: '',
            imageURL: 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhrOVZydlRZVWgxeU5uaXdibE5uQ1p4YjcifQ',
        },
        '2': {
            playerId: '2',
            nickname: 'nick2',
            firstName: 'Nina',
            lastName: 'Nikol',
            email: 'nick2@email.com',
            clerkId: '',
            clerkUsername: '',
            imageURL: 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycXhrQ3VKVVZkcm5oYVNZQnZlVGtiNkZ3T3cifQ',
        },
        '3': {
            playerId: '3',
            nickname: 'nick3',
            firstName: 'Niko',
            lastName: 'Nikolaos',
            email: 'nick3@email.com',
            clerkId: '',
            clerkUsername: '',
            imageURL: 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18xZjR5NVZXem5lbTZLWHhIVmpTV2tvTmJMVHcifQ',
        },
    };
    let playerData = players[playerId];
    if (!playerData) {
        playerData = {
            playerId: playerId,
            nickname: 'Guest',
            firstName: 'Unknown',
            lastName: 'Player',
            email: 'guest@example.com',
            clerkId: '',
            clerkUsername: '',
            imageURL: 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18xZjR5NVZXem5lbTZLWHhIVmpTV2tvTmJMVHcifQ',
        };
    }
    return res.json(playerData);
}
//   `${API_URL}/Player/UpdatePlayerData`,
export function updatePlayerData(req, res) {
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
