import express from "express";
import { Request, Response } from "express";
import acoesRouters from './routers/acoes.router';
import carteirasRouters from './routers/carteiras.router';

const app = express();
const port = 3000;
app.use(express.json())
app.use(acoesRouters)
app.use(carteirasRouters)
app.get('/', (req: Request, res: Response): Response => {
  return res.send('Inicio do desafio Técnico');
});

app.listen(port, ()  => {
  return console.log(`server is listening on ${port}`)
});