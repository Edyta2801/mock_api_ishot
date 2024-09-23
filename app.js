import express from 'express';
import sessionRouter from './routes/session.js';
import playerRouter from './routes/player.js';
import scoreRouter from './routes/score.js';
const app = express();
const port = 3000;

app.use('/Session', sessionRouter);
app.use('/Player', playerRouter);
app.use('/Score', scoreRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
