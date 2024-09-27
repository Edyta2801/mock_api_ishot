import express, { Request, Response, NextFunction } from 'express';
import sessionRouter from './routes/session.js';
import playerRouter from './routes/player.js';
import scoreRouter from './routes/score.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/Session', sessionRouter);
app.use('/Player', playerRouter);
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

export default app;
