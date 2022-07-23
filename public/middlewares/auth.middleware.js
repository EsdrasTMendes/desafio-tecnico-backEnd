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
const JoiValidations_1 = __importDefault(require("../utils/JoiValidations"));
const authMiddleware = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { emailCliente, passwordCliente } = req.body;
    const { error } = JoiValidations_1.default.JoiValidationsAuth.validate(req.body);
    console.log(error);
    next();
});
exports.default = authMiddleware;
