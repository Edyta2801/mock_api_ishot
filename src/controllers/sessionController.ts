import { Request, Response } from 'express';

export enum SessionStatus {
    OPEN = 'Open',
    PLAYING = 'Playing',
    CLOSED = 'Closed',
}

export interface SessionDto {
    type: string;
    status: SessionStatus;
    sessionID: string;
}

// `${API_URL}/Session/GetSessionStatus?sessionID=${sessionId}`
export function getSessionStatus(req: Request, res: Response): void {
    const sessionId: string = req.query.sessionID as string;

    let sessionStatus: SessionStatus;

    if (sessionId === '1') {
        sessionStatus = SessionStatus.OPEN;
    } else if (sessionId === '2') {
        sessionStatus = SessionStatus.PLAYING;
    } else {
        sessionStatus = SessionStatus.CLOSED;
    }

    const sessionData: SessionDto = {
        type: 'one-two-three',
        sessionID: sessionId,
        status: sessionStatus,
    };

    res.json(sessionData);
}

export type PlayerDto = {
    playerId: string;
    nickname: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
};

export type SessionByPlayerDto = Pick<SessionDto, 'status' | 'sessionID'> & {
    status: SessionDto['status'];
    playerIDs: string[];
    scoreIDs: string[];
};

//  `${API_URL}/Session/GetSessionByPlayerID?playerID=${playerId}`
export function getSessionByPlayerID(req: Request, res: Response) {
    const playerId =
        req.query.playerID || req.body.playerID || req.params.playerID;

    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }

    try {
        const data: SessionByPlayerDto = {
            sessionID: 'example-session-id',
            status: SessionStatus.OPEN,
            playerIDs: [playerId],
            scoreIDs: ['1', '2'],
        };

        return res.json(data);
    } catch (error) {
        console.error('Error fetching session data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
