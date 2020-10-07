const Joi = require("joi");

module.exports = {
  // POST /v1/author Create new author
  create: {
    body: {
      name: Joi.string().min(3).max(128).required(),
      born: Joi.string().min(3).max(2000),
      died: Joi.string().min(3).max(2000),
      descriptions: Joi.string().min(3).max(2000),
      picture: Joi.array().max(50),
    },
  },
};
