export function getSessionStatus(req, res) {
    const sessionId = req.query.sessionID;
    res.json({ sessionID: sessionId, status: 'active' });
}
