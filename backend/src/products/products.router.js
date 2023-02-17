const express = require("express");

const controller = require("./products.controller");

const router = express.Router();

router.get("products/", controller.findAll);
router.get("products/:id", controller.findById);
router.post("products/", controller.create);
router.put("products/:id", controller.updateById);
router.delete("products/:id", controller.deleteById);

module.exports = router;
