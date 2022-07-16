import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response): Response => {
  return res.send('Inicio do desafio Técnico');
});

app.listen(port, ()  => {
  return console.log(`server is listening on ${port}`)
});