const Joi = require('@hapi/joi');

const reviewSchema = Joi.object({
  name: Joi.string().min(3).required(),
  mark: Joi.number(),
});

module.exports = reviewSchema;
