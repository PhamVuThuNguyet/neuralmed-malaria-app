const doctorService = require("../services/doctor.service");

class DoctorController {
  index(req, res) {
    res.json(doctorService.index());
  }
}

module.exports = new DoctorController();
