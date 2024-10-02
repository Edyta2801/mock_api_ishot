// Mock database array
const players = [];
export const Player = {
    create: async ({ sessionID, nickname, }) => {
        // const playerID = uuidv4();
        const playerID = '1';
        players.push({ playerID, sessionID, nickname });
        return playerID;
    },
};
