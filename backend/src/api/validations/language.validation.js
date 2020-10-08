const Joi = require("joi");

module.exports = {
  // POST /v1/language
  createLanguage: {
    body: {
      name: Joi.string().min(3).max(128).required(),
    },
  },

  // PUT /v1/language/:languageId
  updateLanguage: {
    param: Joi.object({
      languageId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
    body: {
      name: Joi.string().min(3).max(128).required(),
    },
  },

  // GET /v1/language/:languageId
  getLanguage: {
    param: Joi.object({
      languageId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },

  // DELETE /v1/language/:languageId
  removeLanguage: {
    param: Joi.object({
      languageId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
