const Joi = require('joi');

exports.schema = Joi.object({
  fullName: Joi.string()
    .min(3)
    .required(),
  summerHistory: Joi.string()
    .min(3)
    .required(),
  mark: Joi.number()
});
