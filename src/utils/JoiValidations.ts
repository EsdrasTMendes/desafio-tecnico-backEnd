import Joi from 'joi';

const JoiValidations = Joi.object({
  codCliente: Joi.number().required(),
  codAtivo: Joi.number().required(),
  qtdeAtivo: Joi.number().required(),
});

const JoiValidationsCodClient = Joi.object({
  codCliente: Joi.number().min(1).required(),
})

const JoiValidationsSaque = Joi.object({
  CodCliente: Joi.number().min(1).required(),
  Valor: Joi.number().min(0.1).required(),
})

const JoiValidationsAuth = Joi.object({
  email: Joi.string().regex(RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i)).required(),
  password: Joi.string().min(8).required(),
});

const JoiCreateClient = Joi.object({
  nomeCliente: Joi.string().min(3).required(),
  emailCliente: Joi.string().regex(RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/i)).required(),
  saldoConta: Joi.number().required(),
  saldoCustodia: Joi.number().required(),
  passwordCliente: Joi.string().min(8).required(),
});

export default {
  JoiValidations,
  JoiValidationsCodClient,
  JoiValidationsSaque,
  JoiValidationsAuth,
  JoiCreateClient,
};