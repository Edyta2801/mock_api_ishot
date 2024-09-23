export function getPlayerData(req, res) {
    const playerId = req.query.playerID;
    res.json({ playerId: playerId, name: 'John Doe', rank: 5 });
}

export function updatePlayerData(req, res) {
    const playerData = req.body;
    res.json({ success: true, updatedPlayer: playerData });
}
