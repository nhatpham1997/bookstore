const express = require("express");
const { authorize, LOGGED_USER } = require("../../middlewares/auth");
const controller = require("../../controllers/language.controller");
const validate = require("express-validation");
const {
  createLanguage,
  updateLanguage,
  getLanguage,
  removeLanguage,
} = require("../../validations/language.validation");

const router = express.Router();

router.param("languageId", controller.load);

router
  .route("/")
  .post(authorize(LOGGED_USER), validate(createLanguage), controller.create)
  .get(authorize(LOGGED_USER), controller.list);

router
  .route("/:languageId")
  .get(authorize(LOGGED_USER), validate(getLanguage), controller.get)
  .put(authorize(LOGGED_USER), validate(updateLanguage), controller.update)
  .delete(authorize(LOGGED_USER), validate(removeLanguage), controller.remove);

module.exports = router;
