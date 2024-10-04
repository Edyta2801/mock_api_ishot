//  `${API_URL}/Score/GetRankedPlayerScores?playerID=${playerId}`
export function GetRankedPlayerScores(req, res) {
    const playerId = req.query.playerID;
    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }
    const scores = [
        {
            scoreID: '1',
            sessionId: '1',
            points: 300,
            rank: 20,
            date: new Date(),
        },
        {
            scoreID: '3',
            sessionId: '2',
            points: 100,
            rank: 10,
            date: new Date(),
        },
    ];
    return res.json({ playerId, scores });
}
// `${API_URL}/Score/GetPlayerScores?playerID=${playerId}`
export function getPlayerScores(req, res) {
    const playerId = req.query.playerID;
    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }
    const scores = [
        {
            playDate: new Date(),
            scoreID: '1',
            operatorID: 'OP1',
            playerID: playerId,
            score: '100',
            nickname: 'your-nickname',
        },
        {
            playDate: new Date(),
            scoreID: '2',
            operatorID: 'OP1',
            playerID: playerId,
            score: '200',
            nickname: 'nickname2',
        },
    ];
    return res.json({ playerId, scores });
}
// `http://localhost:3000/api/sessions/${sessionId}/${playerId}/scores`;
export async function fetchScores(req, res, next) {
    try {
        const { sessionId, playerId } = req.params;
        if (!sessionId || !playerId) {
            res.status(400).json({ error: 'Missing sessionId or playerId' });
            return;
        }
        console.log('Fetching scores for session:', sessionId, 'and player:', playerId);
        const exampleScores = [
            {
                playDate: new Date('2024-09-25'),
                scoreID: '1',
                operatorID: 'OP1',
                playerID: playerId,
                score: '100',
                nickname: 'nick',
            },
            {
                playDate: new Date('2024-09-26'),
                scoreID: '2',
                operatorID: 'OP1',
                playerID: playerId,
                score: '200',
                nickname: 'another-nickname',
            },
        ];
        const playerSessionId = `${playerId}-${sessionId}`;
        res.status(200).json({
            scores: exampleScores,
            playerSessionId,
        });
    }
    catch (error) {
        console.error('Error fetching scores:', error);
        next(error);
    }
}
//  `${API_URL}/Score/GetRankedPlayerScores?playerID=${playerId}`
export function getRankedPlayerScores(req, res) {
    const playerId = req.query.playerID;
    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }
    const scores = [
        {
            playDate: new Date(),
            scoreID: '1',
            operatorID: 'OP1',
            playerID: playerId,
            score: '500',
            nickname: 'nick',
        },
        {
            playDate: new Date(),
            scoreID: '2',
            operatorID: 'OP2',
            playerID: playerId,
            score: '600',
            nickname: 'nickname',
        },
    ];
    return res.json({ playerId, scores });
}
