const express = require("express");

const controller = require("./delivery.controller");

const router = express.Router();

router.get("delivery/", controller.findAll);
router.get("delivery/:id", controller.findById);
router.post("delivery/", controller.create);
router.put("delivery/:id", controller.updateById);
router.delete("delivery/:id", controller.deleteById);

module.exports = router;
