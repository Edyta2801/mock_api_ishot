import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import sessionRouter from './routes/session.js';
import playerRouter from './routes/player.js';
import scoreRouter from './routes/score.js';
import { updatePlayerData } from './controllers/playerController.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(
    cors({
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST', 'PUT', 'PATCH'],
        credentials: true,
    })
);

app.use(express.json());

app.use('/Session', sessionRouter);
app.use('/Player', playerRouter);
app.use('/api', scoreRouter);
app.use('/Score', scoreRouter);

app.use(playerRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
