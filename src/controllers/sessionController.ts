import { Request, Response } from 'express';
import { SessionStatus, SessionDto, SessionByPlayerDto } from './types';

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
        type: 'SessionStatus',
        sessionID: sessionId,
        status: sessionStatus,
    };

    res.json(sessionData);
}

//  `${API_URL}/Session/GetSessionByPlayerID?playerID=${playerId}`
export function getSessionByPlayerID(req: Request, res: Response) {
    const playerId =
        req.query.playerID || req.body.playerID || req.params.playerID;

    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }

    try {
        const data: SessionByPlayerDto = {
            sessionID: '1',
            operatorID: 'Test',
            status: SessionStatus.OPEN,
            playerIDs: ['1', '2'],
            scoreIDs: ['1', '2'],
            creationDate: '2024-03-26T11:35:45',
        };

        return res.json(data);
    } catch (error) {
        console.error('Error fetching session data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
