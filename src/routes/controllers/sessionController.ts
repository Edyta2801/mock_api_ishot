export function getSessionStatus(req: { query: { sessionID: any; }; }, res: { json: (arg0: { type: string; sessionID: any; status: string; }) => void; }) {
    const sessionId = req.query.sessionID;
    res.json({
        type: 'one-two-three',
        sessionID: sessionId,
        status: 'Open',
    });
}
