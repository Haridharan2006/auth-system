const express = require("express");

const router = express.Router();

const controller =
    require("../controllers/groupMappingController");

router.post(
    "/create",
    controller.createMapping
);

router.get(
    "/",
    controller.getMappings
);

router.delete(
    "/:id",
    controller.deleteMapping
);

module.exports = router;