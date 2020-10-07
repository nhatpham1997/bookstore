const mongoose = require("mongoose");
const httpStatus = require("http-status");
const APIError = require("../utils/APIError");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    authorId: {
      type: mongoose.Types.ObjectId,
      ref: "Author",
    },
    publisherId: {
      type: mongoose.Types.ObjectId,
      ref: "Publisher",
    },
    language: {
      type: String,
      required: true,
    },
    yearPublished: {
      type: String,
      required: true,
    },
    picture: [String],
    descriptions: {
      type: String,
    },
    page: {
      type: String,
      required: true,
    },
    price: Number,
    extant: Number,
    sale: Number,
  },
  { timestamps: true }
);

bookSchema.static = {
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
          .populate("categoryId", "id name descriptions")
          .populate("authorId", "id name born descriptions picture category")
          .populate("publisherId", "id name descriptions")
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
      "id",
      "name",
      "categoryId",
      "authorId",
      "publisherId",
      "language",
      "yearPublisherId",
      "picture",
      "descriptions",
      "page",
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
