const Joi = require("joi");

module.exports = {
  // POST /v1/author
  createAuthor: {
    body: {
      name: Joi.string().min(3).max(128).required(),
      born: Joi.string().min(3).max(2000),
      died: Joi.string().min(3).max(2000),
      descriptions: Joi.string().min(3).max(2000),
      picture: Joi.array().max(50),
    },
  },

  // GET /v1/author/:authorId
  getAuthor: {
    param: Joi.object({
      authorId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },

  // PUT /v1/author/:authorId
  updateAuthor: {
    param: Joi.object({
      authorId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
    body: {
      name: Joi.string().min(3).max(128).required(),
      born: Joi.string().min(3).max(2000),
      died: Joi.string().min(3).max(2000),
      descriptions: Joi.string().min(3).max(2000),
      picture: Joi.array().max(50),
    }
  },

  // DELETE /v1/author/:authorId
  removeAuthor: {
    param: Joi.object({
      authorId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
