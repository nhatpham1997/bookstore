const mongoose = require("mongoose");
const httpStatus = require("http-status");
const APIError = require("../utils/APIError");

const publisherSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 128,
    trim: true,
    required: true,
  },
  descriptions: String,
});

publisherSchema.static = {
  /**
   *
   * @param {ObjectId} id - the objectId of publisher
   * @return {Promise<Publisher, APIError}
   */
  async get(id) {
    try {
      let publisher;

      if (mongoose.Types.ObjectId.isValid(id)) {
        publisher = await this.findById(id).exec();
      }

      if (publisher) {
        return publisher;
      }

      throw new APIError({
        message: "Publisher does not exists",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
};

publisherSchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "name", "descriptions"];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });
    return transformed;
  },
});

module.exports = new mongoose.model("Publisher", publisherSchema);
