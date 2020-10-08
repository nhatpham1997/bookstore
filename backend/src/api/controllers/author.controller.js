const httpStatus = require('http-status');
const Author = require('../models/author.model');

exports.load = async (req, res, next, id) => {
    try {
        const author = await Author.get(id);
        req.locals = {author};
        return next();
    } catch (error) {
        return next(error);
    }
}

exports.create = async (req, res, next) => {
    try {
        let author = await new Author(req.body).save();
        res.status(httpStatus.CREATED);
        author = await author.transform();
        return res.json(author);
    } catch (error) {
        return next(error);
    }
}

exports.get = async (req, res, next) => {
    try {
        const author = req.locals.author.transform();
        console.log(req.locals);
        return res.json({author});
    } catch (error) {
        return next(error);
    }
}

exports.update = async (req, res, next) => {
    try {
        const author = Object.assign(req.locals.author, req.body);
        let savedAuthor = await author.save();
        return res.json(savedAuthor.transform());
    } catch (error) {
        return next(error);
    }
}

exports.list = async (req, res, next) => {
    try {
        const authors = await Author.find();
    } catch (error) {
        return next(error);
    }
}

exports.remove = async (req, res, next) => {
    try {
        const author = req.locals.author;
        let authorRemoved = await author.remove();
        return res.json(authorRemoved.transform());
    } catch (error) {
        return next(error);
    }
}
