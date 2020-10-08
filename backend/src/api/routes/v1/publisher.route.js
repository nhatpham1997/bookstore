const express = require("express");
const { authorize, LOGGED_USER } = require("../../middlewares/auth");
const controller = require("../../controllers/publisher.controller");
const validate = require("express-validation");
const {
  createPublisher,
  updatePublisher,
  getPublisher,
  removePublisher,
} = require("../../validations/publisher.validation");

const router = express.Router();

router.param("publisherId", controller.load);

router
  .route("/")
  .post(authorize(LOGGED_USER), validate(createPublisher), controller.create)
  .get(authorize(LOGGED_USER), controller.list);

router
  .route("/:publisherId")
  .get(authorize(LOGGED_USER), validate(getPublisher), controller.get)
  .put(authorize(LOGGED_USER), validate(updatePublisher), controller.update)
  .delete(authorize(LOGGED_USER), validate(removePublisher), controller.remove);

module.exports = router;
