import { v4 as uuidv4 } from 'uuid';

// Mock database array
const players: { playerID: string; sessionID: string; nickname: string }[] = [];

export const Player = {
    create: async ({
        sessionID,
        nickname,
    }: {
        sessionID: string;
        nickname: string;
    }) => {
        const playerID = uuidv4();
        players.push({ playerID, sessionID, nickname });
        return playerID;
    },
};
