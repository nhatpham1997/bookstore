const express = require("express");
const { authorize, LOGGED_USER } = require("../../middlewares/auth");
const controller = require("../../controllers/publisher.controller");
const validate = require("express-validation");
const { create } = require("../../validations/publisher.validation");

const router = express.Router();

router.param("publisherId", controller.load);

router
  .route("/")
  .post(authorize(LOGGED_USER), validate(create), controller.create);

router.route("/:publisherId").get(authorize(LOGGED_USER), controller.get);

module.exports = router;
