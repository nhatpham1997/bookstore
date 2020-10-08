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
        return res.json(publisher);
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

exports.update = async (req, res, next) => {
    try {
        const publisher = Object.assign(req.locals.publisher, req.body);
        let savedPublisher = await publisher.save();
        return res.json(savedPublisher.transform());
    } catch (error) {
        return next(error);
    }
};

exports.list = async (req, res, next) => {
    try {
        const publishers = await Publisher.find();
        res.json(publishers);
    } catch (error) {
        return next(error);
    }
}

exports.remove = async (req, res, next) => {
    try {
        const publisher = req.locals.publisher;
        let publisherRemoved = await publisher.remove();
        return res.json(publisherRemoved.transform());
    } catch (error) {
        return next(error);
    }
}
