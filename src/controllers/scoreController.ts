import { Request, Response, NextFunction } from 'express';
import { ScoreDto, PlayerScore } from './types';

// `${API_URL}/Score/GetPlayerScores?playerID=${playerId}`
export function getPlayerScores(req: Request, res: Response) {
    const playerId = req.query.playerID;

    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }

    const scores: ScoreDto[] = [
        {
            playDate: new Date(),
            scoreID: '1',
            operatorID: 'OP1',
            playerID: playerId as string,
            score: '[{"name":"Points","value":"350"}, {"name":"Playtime","value":"00:07.78"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"0"}]',
        },
        {
            playDate: new Date(),
            scoreID: '2',
            operatorID: 'OP2',
            playerID: playerId as string,
            score: '[{"name":"Points","value":"1975"}, {"name":"Playtime","value":"00:12.93"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"9"}]',
        },
    ];

    return res.json(scores);
}

export function getDetailedPlayerScores(req: Request, res: Response) {
    const playerId = req.query.playerID;

    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }

    const scores: ScoreDto[] = [
        {
            playDate: new Date(),
            scoreID: '1',
            operatorID: 'OP1',
            playerID: '1',
            score: '[{"name":"Points","value":"1975"}, {"name":"Playtime","value":"00:12.93"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"9"}]',
            nickname: 'your-nickname',
        },
    ];

    return res.json(scores);
}

// `http://localhost:3000/api/sessions/${sessionId}/${playerId}/scores`;
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
        console.log(
            'Fetching scores for session:',
            sessionId,
            'and player:',
            playerId
        );
        const exampleScores: ScoreDto[] = [
            {
                playDate: new Date(),
                scoreID: '1',
                operatorID: 'OP1',
                playerID: '1',
                score: '[{"name":"Points","value":"1975"}, {"name":"Playtime","value":"00:12.93"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"9"}]',
                nickname: 'your-nickname',
            },
        ];

        const playerSessionId = `${playerId}-${sessionId}`;

        res.status(200).json({
            scores: exampleScores,
            playerSessionId,
        });
    } catch (error) {
        console.error('Error fetching scores:', error);
        next(error);
    }
}

//  `${API_URL}/Score/GetRankedPlayerScores?playerID=${playerId}`
export function getRankedPlayerScores(req: Request, res: Response) {
    const playerId = req.query.playerID;

    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }

    const playerScores: PlayerScore[] = [
        {
            scoreID: '1',
            sessionId: '1',
            points: 300,
            rank: 1,
            date: new Date(),
        },
        {
            scoreID: '2',
            sessionId: '2',
            points: 100,
            rank: 1,
            date: new Date(),
        },
    ];

    return res.json(playerScores);
}

// `${API_URL}/Score/GetScore?scoreID=${scoreId}`
export function getScoreById(req: Request, res: Response) {
    const scoreId = req.query.scoreID;

    if (!scoreId) {
        return res.status(400).json({ error: 'scoreID is required' });
    }
    // "2024-06-07T09:45:05"
    const scores: ScoreDto[] = [
        {
            playDate: new Date(),
            scoreID: '1',
            operatorID: 'OP1',
            playerID: '1',
            score: '[{"name":"Points","value":"1975"}, {"name":"Playtime","value":"00:12.93"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"9"}]',
            nickname: 'your-nickname',
        },
    ];

    return res.json(scores);
}

// `${API_URL}/Score/GetDetailedScore?scoreID=${scoreId}`
export function getDetailedScoreById(req: Request, res: Response) {
    const scoreId = req.query.scoreID;

    if (!scoreId) {
        return res.status(400).json({ error: 'scoreID is required' });
    }

    const scores: ScoreDto[] = [
        {
            playDate: new Date(),
            scoreID: '1',
            operatorID: 'OP1',
            playerID: '1',
            score: '[{"name":"Points","value":"1975"}, {"name":"Playtime","value":"00:12.93"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"9"}]',
            nickname: 'your-nickname',
        },
    ];

    return res.json(scores);
}

// `${API_URL}/Score/GetSessionScores?sessionID=${sessionId}`
export function getSessionsScores(req: Request, res: Response) {
    const sessionId = req.query.sessionID;

    if (!sessionId) {
        return res.status(400).json({ error: 'sessionID is required' });
    }

    const scores: ScoreDto[] = [
        {
            playDate: new Date(),
            scoreID: '1',
            operatorID: 'OP1',
            playerID: '1',
            score: '[{"name":"Points","value":"1975"}, {"name":"Playtime","value":"00:12.93"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"9"}]',
            nickname: 'your-nickname',
        },
        {
            playDate: new Date(),
            scoreID: '2',
            operatorID: 'OP2',
            playerID: '2',
            score: '[{"name":"Points","value":"975"}, {"name":"Playtime","value":"00:08.49"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"1"}]',
            nickname: 'your-nick',
        },
    ];

    return res.json(scores);
}
