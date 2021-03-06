const router = require("express").Router();
const gameController = require("../../controllers/gameController");

// Matches with "/api/users"
router.route("/")
  .get(gameController.findAll)
  .post(gameController.create)
  .put(gameController.update);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(gameController.findById)
  .put(gameController.update)
  .delete(gameController.remove);

module.exports = router;
