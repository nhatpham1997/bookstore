const express = require("express");
const { authorize, LOGGED_USER } = require("../../middlewares/auth");
const controller = require("../../controllers/category.controller");
const validate = require("express-validation");
const { create } = require("../../validations/category.validation");

const router = express.Router();

router.param("categoryId", controller.load);

router
  .route("/")
  .post(authorize(LOGGED_USER), validate(create), controller.create);

router.route("/:categoryId").get(authorize(LOGGED_USER), controller.get);

module.exports = router;
