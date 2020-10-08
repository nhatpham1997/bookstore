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

exports.update = async (req, res, next) => {
    try {
        const category = Object.assign(req.locals.category, req.body);
        let savedCategory = await category.save();
        return res.json(savedCategory.transform());
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

exports.list = async (req, res, next) => {
    try {
        const categories = await Category.find();
        return res.json(categories);
    } catch (error) {
        return next(error);
    }
}

exports.remove = async (req, res, next) => {
    try {
        const category = req.locals.category;
        let categoryRemoved = await category.remove();
        return res.json(categoryRemoved.transform());
    } catch (error) {
        return next(error);
    }
}
