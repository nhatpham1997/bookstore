const Joi = require("joi");

module.exports = {
  // POST /v1/category Create new category
  create: {
    body: {
      name: Joi.string().min(3).max(128).required(),
      descriptions: Joi.string().min(3).max(2000)
    },
  },
};
