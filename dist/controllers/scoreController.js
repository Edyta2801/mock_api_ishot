//  `${API_URL}/Score/GetRankedPlayerScores?playerID=${playerId}`
// export function GetRankedPlayerScores(req: Request, res: Response) {
//     const playerId = req.query.playerID;
//     if (!playerId) {
//         return res.status(400).json({ error: 'playerID is required' });
//     }
//     const scores: PlayerScore[] = [
//         {
//             scoreID: '1',
//             sessionId: '1',
//             points: 300,
//             rank: 20,
//             date: new Date(),
//         },
//         {
//             scoreID: '3',
//             sessionId: '2',
//             points: 100,
//             rank: 10,
//             date: new Date(),
//         },
//     ];
//     return res.json({ playerId, scores });
// }
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
        // {
        //     playDate: new Date(),
        //     scoreID: '2',
        //     operatorID: 'OP1',
        //     playerID: playerId as string,
        //     score: '200',
        //     nickname: 'nickname2',
        // },
    ];
    return res.json(scores);
}
export function getDetailedPlayerScores(req, res) {
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
        // {
        //     playDate: new Date(),
        //     scoreID: '2',
        //     operatorID: 'OP1',
        //     playerID: playerId as string,
        //     score: '200',
        //     nickname: 'nickname2',
        // },
    ];
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
        const exampleScores = [
            {
                playDate: new Date('2024-09-25'),
                scoreID: '1',
                operatorID: 'OP1',
                playerID: playerId,
                score: '100',
                nickname: 'your-nickname',
            },
            // {
            //     playDate: new Date('2024-09-26'),
            //     scoreID: '2',
            //     operatorID: 'OP1',
            //     playerID: playerId,
            //     score: '200',
            //     nickname: 'another-nickname',
            // },
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
            nickname: 'your-nickname',
        },
        // {
        //     playDate: new Date(),
        //     scoreID: '2',
        //     operatorID: 'OP2',
        //     playerID: playerId as string,
        //     score: '600',
        //     nickname: 'nickname',
        // },
    ];
    return res.json(scores);
}
// `${API_URL}/Score/GetRankedPlayerScores?playerID=${playerId}`
// export function GetRankedPlayerScores(req: Request, res: Response) {
//     const playerId = req.query.playerID;
//     if (!playerId) {
//         return res.status(400).json({ error: 'playerID is required' });
//     }
//     const dataType = req.headers['x-data-type'];
//     if (dataType === 'PlayerScore') {
//         const playerScores: PlayerScore[] = [
//             {
//                 scoreID: '1',
//                 sessionId: '1',
//                 points: 300,
//                 rank: 20,
//                 date: new Date(),
//             },
//             {
//                 scoreID: '3',
//                 sessionId: '2',
//                 points: 100,
//                 rank: 10,
//                 date: new Date(),
//             },
//         ];
//         return res.json({ playerId, scores: playerScores });
//     } else {
//         const scoreDtos: ScoreDto[] = [
//             {
//                 playDate: new Date(),
//                 scoreID: '1',
//                 operatorID: 'OP1',
//                 playerID: playerId as string,
//                 score: '500',
//                 nickname: 'your-nickname',
//             },
//             {
//                 playDate: new Date(),
//                 scoreID: '2',
//                 operatorID: 'OP2',
//                 playerID: playerId as string,
//                 score: '600',
//                 nickname: 'nickname',
//             },
//         ];
//         return res.json({ playerId, scores: scoreDtos });
//     }
// }
// `${API_URL}/Score/GetScore?scoreID=${scoreId}`
export function getScoreById(req, res) {
    const scoreId = req.query.scoreID;
    if (!scoreId) {
        return res.status(400).json({ error: 'scoreID is required' });
    }
    const scores = [
        {
            playDate: new Date(),
            scoreID: '1',
            operatorID: 'OP1',
            playerID: '1',
            score: '100',
            nickname: 'your-nickname',
        },
        // {
        //     playDate: new Date(),
        //     scoreID: '2',
        //     operatorID: 'OP1',
        //     playerID: '2',
        //     score: '200',
        //     nickname: 'nickname2',
        // },
    ];
    return res.json(scores);
}
// `${API_URL}/Score/GetDetailedScore?scoreID=${scoreId}`
export function getDetailedScoreById(req, res) {
    const scoreId = req.query.scoreID;
    if (!scoreId) {
        return res.status(400).json({ error: 'scoreID is required' });
    }
    const scores = [
        {
            playDate: new Date(),
            scoreID: '1',
            operatorID: 'OP1',
            playerID: '1',
            score: '100',
            nickname: 'your-nickname',
        },
        // {
        //     playDate: new Date(),
        //     scoreID: '2',
        //     operatorID: 'OP1',
        //     playerID: '2',
        //     score: '200',
        //     nickname: 'nickname2',
        // },
    ];
    return res.json(scores);
}
