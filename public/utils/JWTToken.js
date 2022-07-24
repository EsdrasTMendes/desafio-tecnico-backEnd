"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SECRET = process.env.JWT_SECRET || 'processenvSecret';
const jwtConfig = {
    expiresIn: '10h',
    algorithm: 'HS256',
};
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!token || token === undefined) {
        return {
            status: 401,
            response: 'Token not found',
            error: true,
        };
    }
    try {
        const validation = yield (0, jsonwebtoken_1.verify)(token, SECRET, jwtConfig);
        return {
            status: 200,
            response: validation,
            error: false
        };
    }
    catch (e) {
        return {
            status: 401,
            response: 'Token expirado ou inválido',
            error: true
        };
    }
});
const generateJWTToken = (client) => (0, jsonwebtoken_1.sign)(client, SECRET, jwtConfig);
exports.default = {
    generateJWTToken,
    verifyToken,
};
