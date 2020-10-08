const Book = require("../models/book.model");
const httpStatus = require('http-status');

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
    const books = await Book.find();
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
    let book = await new Book(req.body).save();
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
    let savedBook = await book.save();
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
