const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctor.controller");

router.get("/", doctorController.index.bind(doctorController));

module.exports = router;
