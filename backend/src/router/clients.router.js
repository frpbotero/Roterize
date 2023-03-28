const express = require("express");

const controller = require("../controller/clients.controller");

const router = express.Router();

router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.create);
router.put("/:id", controller.updateById);
router.delete("/:id", controller.deleteById);

module.exports = router;
