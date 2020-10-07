const httpStatus = require('http-status');
const Publisher = require('../models/publisher.model');

exports.load = async (req, res, next, id) => {
    try {
        const publisher = await Publisher.get(id);
        req.locals = {publisher};
        return next();
    } catch (error) {
        return next(error);
    }
}

exports.create = async (req, res, next) => {
    try {
        let publisher = await new Publisher(req.body).save();
        res.status(httpStatus.CREATED);
        publisher = await publisher.transform();
        return res.json(column);
    } catch (error) {
        return next(error);
    }
}

exports.get = async (req, res, next) => {
    try {
        const publisher = req.locals.publisher.transform();
        console.log(req.locals);
        return res.json({publisher});
    } catch (error) {
        return next(error);
    }
}
