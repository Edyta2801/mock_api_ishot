export var SessionStatus;
(function (SessionStatus) {
    SessionStatus["OPEN"] = "Open";
    SessionStatus["PLAYING"] = "Playing";
    SessionStatus["CLOSED"] = "Closed";
})(SessionStatus || (SessionStatus = {}));
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
