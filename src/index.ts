import express, { Request, Response } from 'express';
import { Server } from 'net';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hello</h1>
    </div>
  `);
});

app.listen(3000, () => console.log('Listening on port 3000'));