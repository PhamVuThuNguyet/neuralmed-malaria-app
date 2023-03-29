const express = require('express');
const router = express.Router();
const doctorRoutes = require('./doctor');
const authRoutes = require('./auth');
const adminRoutes = require('./admin');
const patientRoutes = require('./patient');
const medicalRoutes = require('./medical');

const defaultRoutes = [
  {
    path: '/admin',
    routes: adminRoutes,
  },
  {
    path: '/auth',
    routes: authRoutes,
  },
  {
    path: '/doctors',
    routes: doctorRoutes,
  },
  {
    path: '/patients',
    routes: patientRoutes
  },
  {
    path: '/medicals',
    routes: medicalRoutes
  }
];

defaultRoutes.forEach((item) => router.use(item.path, item.routes));

module.exports = router;
