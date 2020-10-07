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
        return res.json(aut);
    } catch (error) {
        return next(error);
    }
}

exports.get = async (req, res, next) => {
    try {
        console.log(req);
        // const author = req.locals.author.transform();
        // console.log(req.locals);
        // return res.json({author});
    } catch (error) {
        return next(error);
    }
}
