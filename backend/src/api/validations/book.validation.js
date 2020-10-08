const Joi = require("joi");

module.exports = {
  // POST /v1/book
  createBook: {
    body: {
      name: Joi.string().min(3).max(128).required(),
      cateogryId: Joi.string().regex(/^[a-fA-F0-9]{24}$/),
      authorId: Joi.string().regex(/^[a-fA-F0-9]{24}$/),
      publisherId: Joi.string().regex(/^[a-fA-F0-9]{24}$/),
      languageId: Joi.string().regex(/^[a-fA-F0-9]{24}$/),
      yearPublished: Joi.number().min(1960).max(2020).required(),
      picture: Joi.array().max(50),
      price: Joi.number().min(0).required(),
      descriptions: Joi.string().min(3).max(2000),
      pages: Joi.number().min(1).required(),
      sale: Joi.number(),
      extant: Joi.number(),
    },
  },

  // PUT /v1/book/:bookId
  updateBook: {
    param: Joi.object({
      bookId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
    body: {
      name: Joi.string().min(3).max(128).required(),
      cateogryId: Joi.string().regex(/^[a-fA-F0-9]{24}$/),
      authorId: Joi.string().regex(/^[a-fA-F0-9]{24}$/),
      publisherId: Joi.string().regex(/^[a-fA-F0-9]{24}$/),
      languageId: Joi.string().regex(/^[a-fA-F0-9]{24}$/),
      yearPublished: Joi.number().min(1960).max(2020).required(),
      picture: Joi.array().max(50),
      price: Joi.number().min(0).required(),
      descriptions: Joi.string().min(3).max(2000),
      pages: Joi.number().min(1).required(),
      sale: Joi.number(),
      extant: Joi.number(),
    },
  },

  // GET /v1/book/:bookId
  getBook: {
    param: Joi.object({
      bookId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },

  // DELETE /v1/book/:bookId
  removeBook: {
    param: Joi.object({
      bookId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
