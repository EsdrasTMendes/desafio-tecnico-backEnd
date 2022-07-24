"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewareDeErro = (error, _req, res, next) => {
    const { status, response } = error;
    return res.status(status).json({ message: response });
};
exports.default = middlewareDeErro;
