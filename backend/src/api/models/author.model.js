const httpStatus = require("http-status");
const mongoose = require("mongoose");
const APIError = require("../utils/APIError");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 128,
    trim: true,
    required: true,
  },
  born: String,
  died: String,
  descriptions: String,
  photos: [{
    name: String,
    path: String
  }],
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
});

authorSchema.statics = {
  /**
   *
   * @param {ObjectId} id - the objectId of book
   * @return {Promise<Book, APIError}
   */
  async get(id) {
    try {
      let author;

      if (mongoose.Types.ObjectId.isValid(id)) {
        author = await this.findById(id)
          .populate("categoryId", "_id name descriptions")
          .exec();
      }

      if (author) {
        return author;
      }

      throw new APIError({
        message: "Author does not exists",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
};

authorSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      "_id",
      "name",
      "born",
      "died",
      "descriptions",
      "picture",
      "categoryId",
    ];

    fields.forEach(field => {
      transformed[field] = this[field];
    });
    return transformed;
  },
});

module.exports = new mongoose.model("Author", authorSchema);
