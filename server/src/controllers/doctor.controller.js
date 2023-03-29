
class DoctorController {
  index(req, res) {
    res.send("Hello world!");
  }
}

module.exports = new DoctorController();
