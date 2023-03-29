const express = require("express");
const router = express.Router();
const medicalController = require("../controllers/medical.controller");
const { authenticateUser } = require('../middlewares/authentication.middleware');
const { authorizeEmployee } = require('../middlewares/authorization.middleware');

router.post('/', authenticateUser, authorizeEmployee, medicalController.create);
router.get('/patient/:patientId', authenticateUser, medicalController.patient);
router.get('/patient/:patientId/latest', authenticateUser, medicalController.latest);

module.exports = router;
