const Book = require("../models/book.model");
const httpStatus = require("http-status");
const storagePhoto = require("../utils/storagePicture");
const multer = require("multer");
const path = require("path");

exports.load = async (req, res, next, id) => {
  try {
    const book = await Book.get(id);
    req.locals = { book };
    return next();
  } catch (error) {
    return next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    let books = await Book.find()
      .populate("categoryId", "_id name")
      .populate("publisherId", "_id name")
      .populate("authorId", "name");
    books = books.map((item) => item.transform());
    return res.json(books);
  } catch (error) {
    return next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const book = req.locals.book.transform();
    return res.json({ book });
  } catch (error) {
    return next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    let book = await new Book(req.body)
      .save()
      .then((t) =>
        t
          .populate("categoryId", "_id name")
          .populate("publisherId", "_id name")
          .populate("authorId", "_id name")
          .execPopulate()
      );
    res.status(httpStatus.CREATED);
    book = await book.transform();
    return res.json(book);
  } catch (error) {
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const book = Object.assign(req.locals.book, req.body);
    let savedBook = await book
      .save()
      .then((t) =>
        t
          .populate("categoryId", "_id name")
          .populate("publisherId", "_id name")
          .populate("authorId", "_id name")
          .execPopulate()
      );
    return res.json(savedBook.transform());
  } catch (error) {
    return next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const book = req.locals.book;
    let bookRemoved = await book.remove();
    return res.json(bookRemoved.transform());
  } catch (error) {
    return next(error);
  }
};

let photosUploadFile = multer(storagePhoto).single("");

exports.addPhoto = async (req, res, next) => {
  photosUploadFile(req, res, async(err) => {
    try {
      if (!req.file) {
      console.log(err);
      throw new APIError({
        message: err,
        status: httpStatus.BAD_REQUEST,
      });
      }
      let outputFile = req.file.path + ".jpg";

      await sharp(req.file.path).jpeg({ quality: 80 }).toFile(outputFile);

      // delete old file
      fs.unlinkSync(req.file.path);

      let temp = {
        uid: uuidv4(),
        name: `${req.file.filename}.jpg`,
        path: `/images/message/${req.file.filename}.jpg`,
        status: "done",
        response: { status: "success" },
        linkProps: { download: "image" },
        thumbUrl: `${staticUrl}/images/message/${req.file.filename}.jpg`,
      };
      return res.json(temp);
    } catch (error) {
      next(error);
    }
  })
}
