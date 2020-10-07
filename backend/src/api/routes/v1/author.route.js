const express = require("express");
const { authorize, LOGGED_USER } = require("../../middlewares/auth");
const controller = require("../../controllers/author.controller");
const validate = require("express-validation");
const { create } = require("../../validations/author.validation");

const router = express.Router();

router.param("authorId", controller.load);

router
  .route("/")
  .post(authorize(LOGGED_USER), validate(create), controller.create);

router.route("/:authorId").get(authorize(LOGGED_USER), controller.get);

module.exports = router;
