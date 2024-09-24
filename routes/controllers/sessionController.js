export function getSessionStatus(req, res) {
    const sessionId = req.query.sessionID;
    res.json({
        data: {
            type: 'one-two-three',
            sessionID: sessionId,
            status: 'Playing',
        },
});
}
