const httpStatus = require('http-status');
const Category = require('../models/category.model');

exports.load = async (req, res, next, id) => {
    try {
        const category = await Category.get(id);
        req.locals = {category};
        return next();
    } catch (error) {
        return next(error);
    }
}

exports.create = async (req, res, next) => {
    try {
        let category = await new Category(req.body).save();
        res.status(httpStatus.CREATED);
        category = await category.transform();
        return res.json(category);
    } catch (error) {
        return next(error);
    }
}

exports.get = async (req, res, next) => {
    try {
        const category = req.locals.category.transform();
        console.log(req.locals);
        return res.json({category});
    } catch (error) {
        return next(error);
    }
}
