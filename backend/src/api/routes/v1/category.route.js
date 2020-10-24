const express = require("express");
const { authorize, LOGGED_USER } = require("../../middlewares/auth");
const controller = require("../../controllers/category.controller");
const validate = require("express-validation");
const { createCategory, getCategory, updateCategory, removeCategory } = require("../../validations/category.validation");

const router = express.Router();

router.param("categoryId", controller.load);

router
  .route("/")
  .post(authorize(LOGGED_USER), validate(createCategory), controller.create)
  .get(authorize(LOGGED_USER), controller.list);

router
  .route("/:categoryId")
  .get(authorize(LOGGED_USER), validate(getCategory), controller.get)
  .put(authorize(LOGGED_USER), validate(updateCategory), controller.update)
  .delete(authorize(LOGGED_USER), validate(removeCategory), controller.remove);

module.exports = router;
