export function getSessionStatus(req, res) {
    const sessionId = req.query.sessionID;
    res.json({
        type: 'one-two-three',
        sessionID: sessionId,
        status: 'Open',
    });
}
