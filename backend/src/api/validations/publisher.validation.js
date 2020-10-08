const Joi = require("joi");

module.exports = {
  // POST /v1/publisher
  createPublisher: {
    body: {
      name: Joi.string().min(3).max(128).required(),
      descriptions: Joi.string().min(3).max(2000),
    },
  },

  // PUT /v1/publisher/:publisherId
  updatePublisher: {
    params: Joi.object({
      publisherId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
    body: {
      name: Joi.string().min(3).max(128).required(),
      descriptions: Joi.string().min(3).max(2000),
    },
  },

  // GET /v1/publisher/:publisherId
  getPublisher: {
    params: Joi.object({
      publisherId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },

  // DELETE /v1/publisher/:publisherId
  removePublisher: {
    params: Joi.object({
      publisherId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
