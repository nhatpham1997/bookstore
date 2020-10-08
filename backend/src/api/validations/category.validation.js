const Joi = require("joi");

module.exports = {
  // POST /v1/category
  createCategory: {
    body: {
      name: Joi.string().min(3).max(128).required(),
      descriptions: Joi.string().min(3).max(2000)
    },
  },

  // GET /v1/category/:categoryId
  getCategory: {
    params: Joi.object({
      categoryId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },

  // PUT /v1/category/:categoryId
  updateCategory: {
    params: Joi.object({
      categoryId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
    body: {
      name: Joi.string().min(3).max(128).required(),
      descriptions: Joi.string().min(3).max(2000)
    },
  },

  // DELETE /v1/category/:categoryId
  removeCategory: {
    params: Joi.object({
      categoryId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  }
};
