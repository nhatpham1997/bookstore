const Book = require("../models/book.model");
const httpStatus = require("http-status");
const storagePhoto = require("../utils/storagePicture");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const {staticUrl} = require("../../config/vars");

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

let photosUploadFile = multer(storagePhoto).single("photos");

exports.addPhotos = (req, res, next) => {
  photosUploadFile(req, res, async (err) => {
    try {
      if (!req.file) {
      console.log(err);
      throw new APIError({
        message: err,
        status: httpStatus.BAD_REQUEST,
      });
    }

    req.locals.book.photos.push({
      name: req.file.originalname,
      path: req.file.path,
    });

    const book = await req.locals.book.save();

    let temp = {
      uid: uuidv4(),
      name: `${req.file.filename}`,
      path: `${staticUrl}/books/${req.file.filename}`,
      status: "done",
      response: { status: "success" },
      linkProps: { download: "image" },
      thumbUrl: `${staticUrl}/books/${req.file.filename}`,
    };
    return res.json(temp);
    } catch (error) {
      next(error);
    }
});
};

exports.removePhotos = async (req, res, next) => {
  try {
    const book = await req.locals.book.update({ $pull: { photos: { _id: req.params.id } } }, { safe: true, upsert: true });
    return res.json({message: "success"});
  } catch (error) {
    return next(error);
  }
}
