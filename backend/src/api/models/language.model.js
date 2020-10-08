const mongoose = require("mongoose");
const httpStatus = require("http-status");
const APIError = require("../utils/APIError");

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 128,
    trim: true,
    required: true,
  }
});

languageSchema.statics = {
  /**
   *
   * @param {ObjectId} id - the objectId of Language
   * @return {Promise<Language, APIError}
   */
  async get(id) {
    try {
      let language;

      if (mongoose.Types.ObjectId.isValid(id)) {
        language = await this.findById(id).exec();
      }

      if (language) {
        return language;
      }

      throw new APIError({
        message: "Language does not exists",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
};

languageSchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "name", "descriptions"];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });
    return transformed;
  },
});

module.exports = new mongoose.model("Language", languageSchema);
