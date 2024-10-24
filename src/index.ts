import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware для работы с JSON
app.use(express.json());

// GET маршрут
app.get('/', (req: Request, res: Response) => {
  res.send('Привет, мир!');
});

// POST маршрут
app.post('/data', (req: Request, res: Response) => {
  const { name } = req.body;
  res.send(`Привет, ${name}!`);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
