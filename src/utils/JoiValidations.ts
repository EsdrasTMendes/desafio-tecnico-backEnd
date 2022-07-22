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

export default {
  JoiValidations,
  JoiValidationsCodClient,
  JoiValidationsSaque,
};