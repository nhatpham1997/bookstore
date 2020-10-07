const Book = require("../models/book.model");

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
    
  } catch (error) {
    return next(error);
  }
}

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
    
  } catch (error) {
    return next(error);
  }
}
