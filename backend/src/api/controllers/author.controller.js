const httpStatus = require("http-status");
const Author = require("../models/author.model");
const storagePhoto = require("../utils/storagePicture");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const {staticUrl} = require("../../config/vars");

exports.load = async (req, res, next, id) => {
  try {
    const author = await Author.get(id);
    req.locals = { author };
    return next();
  } catch (error) {
    return next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    let author = await new Author(req.body)
      .save()
      .then((t) => t.populate("categoryId", "_id name").execPopulate());
    res.status(httpStatus.CREATED);
    author = await author.transform();
    return res.json(author);
  } catch (error) {
    return next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const author = req.locals.author.transform();
    console.log(req.locals);
    return res.json({ author });
  } catch (error) {
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const author = Object.assign(req.locals.author, req.body);
    let savedAuthor = await author
      .save()
      .then((t) => t.populate("categoryId", "_id name").execPopulate());

    return res.json(savedAuthor.transform());
  } catch (error) {
    return next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    let authors = await Author.find().populate("categoryId", "_id name");
    authors = authors.map((item) => item.transform());
    return res.json(authors);
  } catch (error) {
    return next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const author = req.locals.author;
    let authorRemoved = await author.remove();
    return res.json(authorRemoved.transform());
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
