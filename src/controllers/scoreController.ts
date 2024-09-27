import { Request, Response, NextFunction } from 'express';

interface PlayerScoresQuery {
    playerID?: string;
}
export interface ScoreDto {
    playDate: Date;
    scoreID: string;
    operatorID: string;
    playerID: string;
    score: string;
    nickname?: string;
}

export interface PlayerDto {
    playerId: string;
    nickname: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
}
export function getPlayerScores(req: Request, res: Response) {
    const playerId = req.query.playerID;

    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }

    const scores = [
        { scoreId: '1', value: 100, playerId: playerId },
        { scoreId: '2', value: 200, playerId: playerId },
    ];

    return res.json({ playerId, scores });
}

export async function fetchScores(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    try {
        const { sessionId, playerId } = req.params;

        if (!sessionId || !playerId) {
            res.status(400).json({ error: 'Missing sessionId or playerId' });
            return;
        }

        const exampleScores: ScoreDto[] = [
            {
                playDate: new Date('2024-09-25'),
                scoreID: '1',
                operatorID: 'OP1',
                playerID: playerId,
                score: '100',
                nickname: 'PlayerOne',
            },
            {
                playDate: new Date('2024-09-26'),
                scoreID: '2',
                operatorID: 'OP1',
                playerID: playerId,
                score: '200',
            },
        ];

        const playerSessionId = `${playerId}-${sessionId}`;

        res.status(200).json({
            scores: exampleScores,
            playerSessionId,
        });
    } catch (error) {
        next(error);
    }
}
