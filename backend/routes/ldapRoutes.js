const express = require("express");

const router = express.Router();

const ldapController =
require("../controllers/ldapController");

/**
 * @swagger
 * /ldap/login:
 *   post:
 *     summary: Authenticate LDAP user
 *     tags: [LDAP]
 */

router.post(
    "/login",
    ldapController.login
);

module.exports = router;