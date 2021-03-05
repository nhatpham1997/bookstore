const express = require("express");
const { authorize, LOGGED_USER } = require("../../middlewares/auth");
const controller = require("../../controllers/author.controller");
const validate = require("express-validation");
const { createAuthor, getAuthor, updateAuthor, removeAuthor } = require("../../validations/author.validation");

const router = express.Router();

router.param("authorId", controller.load);

router
  .route("/")
  .post(authorize(LOGGED_USER), validate(createAuthor), controller.create)
  .get(authorize(LOGGED_USER), controller.list);

router
  .route("/:authorId")
  .get(authorize(LOGGED_USER), validate(getAuthor), controller.get)
  .put(authorize(LOGGED_USER), validate(updateAuthor), controller.update)
  .delete(authorize(LOGGED_USER), validate(removeAuthor), controller.remove);

router.route("/photos/:authorId").post(authorize(LOGGED_USER), controller.addPhotos);

module.exports = router;
