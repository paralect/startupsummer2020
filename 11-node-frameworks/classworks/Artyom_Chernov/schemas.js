const Joi = require('@hapi/joi');

module.exports = schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(10)
    .required(),

  surname: Joi.string()
    .alphanum()
    .min(3)
    .max(10)
    .required(),

  description: Joi.string()
    .alphanum()
    .min(3)
    .required(),

  select: [
    Joi.number()
  ],
})