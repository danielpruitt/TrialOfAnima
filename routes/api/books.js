const router = require("express").Router();
const gameController = require("../../controllers/gameController");

// Matches with "/api/books"
router.route("/")
  .get(gameController.findAll)
  .post(gameController.create);

// Matches with "/api/books/count-by-author"
router
  .route("/count-by-author")
  .get(gameController.countsByPlayer);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(gameController.findById)
  .put(gameController.update)
  .delete(gameController.remove);

module.exports = router;
