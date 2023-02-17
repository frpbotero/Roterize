const express = require("express");

const controller = require("./clients.controller");

const router = express.Router();

router.get("clients/", controller.findAll);
router.get("clients/:id", controller.findById);
router.post("clients/", controller.create);
router.put("clients/:id", controller.updateById);
router.delete("clients/:id", controller.deleteById);

module.exports = router;
