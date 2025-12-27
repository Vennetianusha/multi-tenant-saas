const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const userController = require("../controllers/userController");

// create user
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["tenant_admin"]),
  userController.createUser
);

// list users
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["tenant_admin"]),
  userController.getUsers
);

module.exports = router;
