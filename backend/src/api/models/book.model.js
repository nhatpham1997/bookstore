const mongoose = require("mongoose");
const httpStatus = require("http-status");
const APIError = require("../utils/APIError");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category"
    },
    authorId: {
      type: mongoose.Types.ObjectId,
      ref: "Author"
    },
    publisherId: {
      type: mongoose.Types.ObjectId,
      ref: "Publisher"
    },
    languageId: {
      type: mongoose.Types.ObjectId,
      ref: "Language"
    },
    yearPublished: {
      type: String,
      required: true
    },
    photos: [String],
    descriptions: {
      type: String
    },
    pages: {
      type: String,
      required: true
    },
    price: Number,
    extant: Number,
    sale: Number
  },
  { timestamps: true }
);

bookSchema.statics = {
  /**
   *
   * @param {ObjectId} id - the objectId of book
   * @return {Promise<Book, APIError}
   */
  async get(id) {
    try {
      let book;

      if (mongoose.Types.ObjectId.isValid(id)) {
        book = await this.findById(id)
          .populate("categoryId", "_id name descriptions")
          .populate("authorId", "_id name born descriptions picture")
          .populate("publisherId", "_id name descriptions")
          .populate("languageId", "_id name")
          .exec();
      }

      if (book) {
        return book;
      }

      throw new APIError({
        message: "Book does not exists",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
};

bookSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      "_id",
      "name",
      "categoryId",
      "authorId",
      "publisherId",
      "languageId",
      "yearPublished",
      "photos",
      "descriptions",
      "pages",
      "price",
      "extant",
      "sale",
    ];

    fields.forEach(field => {
      transformed[field] = this[field];
    });
    return transformed;
  },
});

module.exports = new mongoose.model("Book", bookSchema);
