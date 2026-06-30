const express = require("express");

const router = express.Router();

const controller =
require("../controllers/openidProviderController");

router.post(
    "/create",
    controller.createProvider
);

router.get(
    "/",
    controller.getProviders
);

router.delete(
    "/:id",
    controller.deleteProvider
);

module.exports = router;