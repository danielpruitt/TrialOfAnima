const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/users", bookRoutes);

module.exports = router;
