const httpStatus = require('http-status');
const Language = require('../models/language.model');

exports.load = async (req, res, next, id) => {
    try {
        const language = await Language.get(id);
        req.locals = {language};
        return next();
    } catch (error) {
        return next(error);
    }
}

exports.create = async (req, res, next) => {
    try {
        let language = await new Language(req.body).save();
        res.status(httpStatus.CREATED);
        language = await language.transform();
        return res.json(language);
    } catch (error) {
        return next(error);
    }
}

exports.get = async (req, res, next) => {
    try {
        const language = req.locals.language.transform();
        console.log(req.locals);
        return res.json({language});
    } catch (error) {
        return next(error);
    }
}

exports.update = async (req, res, next) => {
    try {
        const language = Object.assign(req.locals.language, req.body);
        let savedLanguage = await language.save();
        return res.json(savedLanguage.transform());
    } catch (error) {
        return next(error);
    }
}

exports.list = async (req, res, next) => {
    try {
        const languages = await Language.find();
        return res.json(languages);
    } catch (error) {
        return next(error);
    }
}

exports.remove = async (req, res, next) => {
    try {
        const language = req.locals.language;
        let languageRemoved = await language.remove();
        return res.json(languageRemoved.transform());
    } catch (error) {
        return next(error);
    }
}
