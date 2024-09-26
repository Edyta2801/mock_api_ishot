export function getPlayerScores(req, res) {
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
