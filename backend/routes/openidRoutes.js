const express = require("express");

const router = express.Router();

const openidController =
require("../controllers/openidController");

router.get(
    "/providers",
    openidController.getProviders
);

router.get(
    "/login/:provider",
    openidController.login
);

router.get(
    "/callback",
    openidController.callback
);

module.exports = router;