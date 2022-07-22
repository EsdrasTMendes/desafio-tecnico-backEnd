import Joi from 'joi';

const JoiValidations = Joi.object({
  codCliente: Joi.number().required(),
  codAtivo: Joi.number().required(),
  qtdeAtivo: Joi.number().required(),
});

export default JoiValidations;