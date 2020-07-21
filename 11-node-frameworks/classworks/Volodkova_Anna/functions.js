const Joi = require('@hapi/joi');

const getCounter = (session) => {
  const s = session;
  s.count = s.count || 0;
  return s.count;
};

const incCounter = (session) => {
  let counter = getCounter(session);
  return () => counter++;
};

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  mark: Joi.number(),
});

export {incCounter, schema};
