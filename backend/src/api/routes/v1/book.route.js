const express = require("express");
const controller = require("../../controllers/book.controller");
const { authorize, LOGGED_USER } = require("../../middlewares/auth");

const router = express.Router();

router.param("bookId", controller.load);

router
  .route("/")
  .post(authorize(LOGGED_USER), controller.create)
  .get(authorize(LOGGED_USER), controller.list);

router.route("/:id").get(authorize(LOGGED_USER), controller.get);

module.exports = router;
