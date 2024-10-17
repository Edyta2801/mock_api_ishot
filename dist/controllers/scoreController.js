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
            score: '[{"name":"Points","value":"350"}, {"name":"Playtime","value":"00:07.78"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"0"}]',
        },
        {
            playDate: new Date(),
            scoreID: '2',
            operatorID: 'OP2',
            playerID: playerId,
            score: '[{"name":"Points","value":"1975"}, {"name":"Playtime","value":"00:12.93"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"9"}]',
        },
    ];
    return res.json(scores);
}
export function getDetailedPlayerScores(req, res) {
    const playerId = req.query.playerID;
    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }
    const scores = {
        playDate: new Date(),
        scoreID: '1',
        operatorID: 'OP1',
        playerID: '1',
        score: '[{"name":"Points","value":"1975"}, {"name":"Playtime","value":"00:12.93"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"9"}]',
        nickname: 'your-nickname',
    };
    return res.json(scores);
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
        // "2024-10-11T19:31:33.627Z"
        // "2024-06-06T16:06:43"
        const exampleScores = [
            {
                playDate: new Date('2024-06-06T16:06:43'),
                scoreID: '1',
                operatorID: 'OP1',
                playerID: '1',
                score: `[{\"name\":\"Points\",\"value\":\"600\"}, {\"name\":\"Playtime\",\"value\":\"00:32.08\"}, {\"name\":\"Accuracy\",\"value\":\"100.00%\"}, {\"name\":\"Headshots\",\"value\":\"6\"}, {\"name\":\"Shots\",\"value\":\"6\"}, {\"name\":\"Map\",\"value\":\"Factory\"}, {\"name\":\"Mission\",\"value\":\"Duo\"}, {\"name\":\"MissionSettings\",\"value\":\"Robots\"}]`,
                nickname: 'your-nickname',
            },
            {
                playDate: new Date('2024-06-06T16:06:43'),
                scoreID: '2',
                operatorID: 'OP1',
                playerID: '2',
                score: '[{"name":"Points","value":"1100"}, {"name":"Playtime","value":"00:32.08"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"6"}, {"name":"Shots","value":"6"}, {"name":"Map","value":"Factory"}, {"name":"Mission","value":"Duo"}, {"name":"MissionSettings","value":"Robots"}]',
                nickname: 'nick',
            },
            {
                playDate: new Date('2024-06-06T16:06:43'),
                scoreID: '3',
                operatorID: 'OP1',
                playerID: '3',
                score: '[{"name":"Points","value":"350"}, {"name":"Playtime","value":"00:31.56"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"1"}, {"name":"Shots","value":"6"}, {"name":"Map","value":"Factory"}, {"name":"Mission","value":"Duo"}, {"name":"MissionSettings","value":"Robots"}]',
                nickname: 'nickname',
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
    const playerScores = [
        {
            scoreID: '1',
            sessionId: '1',
            points: 300,
            rank: 1,
            date: new Date(),
        },
        {
            scoreID: '2',
            sessionId: '1',
            points: 100,
            rank: 1,
            date: new Date(),
        },
        {
            scoreID: '3',
            sessionId: '1',
            points: 200,
            rank: 1,
            date: new Date(),
        },
    ];
    return res.json(playerScores);
}
// `${API_URL}/Score/GetScore?scoreID=${scoreId}`
export function getScoreById(req, res) {
    const scoreId = req.query.scoreID;
    if (!scoreId) {
        return res.status(400).json({ error: 'scoreID is required' });
    }
    // "2024-06-07T09:45:05"
    const scores = {
        playDate: new Date(),
        // playDate: '2024-10-17T09:25:31.288Z',
        scoreID: '1',
        operatorID: 'OP1',
        playerID: '1',
        score: '[{"name":"Points","value":"1975"}, {"name":"Playtime","value":"00:12.93"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"9"}]',
        nickname: 'your-nickname',
    };
    return res.json(scores);
}
// `${API_URL}/Score/GetDetailedScore?scoreID=${scoreId}`
export function getDetailedScoreById(req, res) {
    const scoreId = req.query.scoreID;
    if (!scoreId) {
        return res.status(400).json({ error: 'scoreID is required' });
    }
    const scores = {
        playDate: new Date(),
        scoreID: '1',
        operatorID: 'OP1',
        playerID: '1',
        score: '[{"name":"Points","value":"1975"}, {"name":"Playtime","value":"00:12.93"}, {"name":"Accuracy","value":"100.00%"}, {"name":"Headshots","value":"9"}]',
        nickname: 'your-nickname',
    };
    return res.json(scores);
}
// `${API_URL}/Score/GetSessionScores?sessionID=${sessionId}`
export function getSessionsScores(req, res) {
    const sessionId = req.query.sessionID;
    if (!sessionId) {
        return res.status(400).json({ error: 'sessionID is required' });
    }
    const scores = [
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
