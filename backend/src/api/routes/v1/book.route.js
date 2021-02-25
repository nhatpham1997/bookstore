const express = require("express");
const validate = require("express-validation");
const controller = require("../../controllers/book.controller");
const { authorize, LOGGED_USER } = require("../../middlewares/auth");
const {
  createBook,
  getBook,
  updateBook,
  removeBook,
} = require("../../validations/book.validation");

const router = express.Router();

router.param("bookId", controller.load);

router
  .route("/")
  .post(authorize(LOGGED_USER), validate(createBook), controller.create)
  .get( controller.list);

router
  .route("/:bookId")
  .get(authorize(LOGGED_USER), validate(getBook), controller.get)
  .put(authorize(LOGGED_USER), validate(updateBook), controller.update)
  .delete(authorize(LOGGED_USER), validate(removeBook), controller.remove);

router.route("/photos/:bookId").post(authorize(LOGGED_USER), controller.addPhotos);

router.route("/photos/:bookId/:id").delete(authorize(LOGGED_USER), controller.removePhotos);

module.exports = router;
