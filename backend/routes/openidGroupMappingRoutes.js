const express = require("express");

const router = express.Router();

const controller =
require("../controllers/openidGroupMappingController");

router.post(
    "/create",
    controller.createMapping
);

module.exports = router;