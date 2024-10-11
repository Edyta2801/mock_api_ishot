export type PlayerDto = {
    playerId: string;
    nickname: string;
    firstName: string;
    lastName: string;
    email: string;
    clerkId?: string;
    clerkUsername?: string;
    imageURL?: string;
};

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
    email: string;
    clerkID?: string;
    clerkUsername?: string;
    imageURL: string;
};

export type ScoreDto = {
    playDate: Date;
    scoreID: string;
    operatorID: string;
    playerID: string;
    score: string;
    nickname?: string;
};

export type PlayerScore = {
    scoreID: string;
    sessionId: string;
    points: number;
    rank: number;
    date: Date;
};