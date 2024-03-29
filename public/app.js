"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const acoes_router_1 = __importDefault(require("./routers/acoes.router"));
const investimentos_router_1 = __importDefault(require("./routers/investimentos.router"));
const clientes_router_1 = __importDefault(require("./routers/clientes.router"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(acoes_router_1.default, investimentos_router_1.default, clientes_router_1.default);
app.get('/', (req, res) => {
    return res.send('Inicio do desafio Técnico');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
