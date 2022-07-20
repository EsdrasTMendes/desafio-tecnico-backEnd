"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderBuilder = (codCliente, saldoConta, saldoCustodia) => {
    return {
        codCliente,
        saldoConta,
        saldoCustodia,
    };
};
exports.default = orderBuilder;
