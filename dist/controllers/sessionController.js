export var SessionStatus;
(function (SessionStatus) {
    SessionStatus["OPEN"] = "Open";
    SessionStatus["PLAYING"] = "Playing";
    SessionStatus["CLOSED"] = "Closed";
})(SessionStatus || (SessionStatus = {}));
// `${API_URL}/Session/GetSessionStatus?sessionID=${sessionId}`
export function getSessionStatus(req, res) {
    const sessionId = req.query.sessionID;
    let sessionStatus;
    if (sessionId === '1') {
        sessionStatus = SessionStatus.OPEN;
    }
    else if (sessionId === '2') {
        sessionStatus = SessionStatus.PLAYING;
    }
    else {
        sessionStatus = SessionStatus.CLOSED;
    }
    const sessionData = {
        type: 'one-two-three',
        sessionID: sessionId,
        status: sessionStatus,
    };
    res.json(sessionData);
}
//  `${API_URL}/Session/GetSessionByPlayerID?playerID=${playerId}`
export function getSessionByPlayerID(req, res) {
    const playerId = req.query.playerID || req.body.playerID || req.params.playerID;
    if (!playerId) {
        return res.status(400).json({ error: 'playerID is required' });
    }
    try {
        const data = {
            sessionID: 'example-session-id',
            status: SessionStatus.OPEN,
            playerIDs: [playerId],
            scoreIDs: ['1', '2'],
        };
        return res.json(data);
    }
    catch (error) {
        console.error('Error fetching session data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
