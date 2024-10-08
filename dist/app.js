import express from 'express';
import cors from 'cors';
import sessionRouter from './routes/session.js';
import playerRouter from './routes/player.js';
import scoreRouter from './routes/score.js';
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT'],
    credentials: true,
}));
app.use(express.json());
app.use('/Session', sessionRouter);
app.use('/Player', playerRouter);
app.use('/api', scoreRouter);
app.use('/Score', scoreRouter);
app.use(playerRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
