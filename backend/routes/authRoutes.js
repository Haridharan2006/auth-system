const express = require("express");

const router = express.Router();

const authController =
require("../controllers/authController");

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Authenticate user
 *     tags: [Authentication]
 */

router.post(
    "/login",
    authController.login
);

module.exports = router;