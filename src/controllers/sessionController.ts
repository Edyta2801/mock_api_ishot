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

export function getSessionStatus(req: Request, res: Response): void {
    const sessionId: string = req.query.sessionID as string;

    let sessionStatus: SessionStatus;

    if (sessionId === '12345') {
        sessionStatus = SessionStatus.OPEN;
    } else if (sessionId === 'P') {
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
