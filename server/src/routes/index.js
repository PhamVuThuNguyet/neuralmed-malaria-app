const express = require("express");
const router = express.Router();
const doctorRoutes = require("./doctor");

const defaultRoutes = [
  {
    path: "/doctors",
    routes: doctorRoutes,
  },
];

defaultRoutes.forEach((item) => router.use(item.path, item.routes));

module.exports = router;
