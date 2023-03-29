const medicalService = require('../services/medical.service');

class MedicalController {

  /**
   * @notice [POST] /api/v1/medicals
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {
    try {
      const medical = await medicalService.createOne(req.body);
      res.json(medical);
    } catch (error) {
      res.status(500).send();
    }
  }

  /**
   * @notice [GET] /api/v1/medicals/patient/:patientId
   * @param {*} req 
   * @param {*} res 
   */
  async patient(req, res) {
    try {
      const medicals = await medicalService.findMany({ patient: req.params.patientId });
      res.json(medicals)
    } catch (error) {
      res.status(500).send();
    }
  }

  /**
   * @notice [GET] /api/v1/medicals/patient/:patientId/latest
   * @param {*} req 
   * @param {*} res 
   */
  async latest(req, res) {
    try {
      const medical = await medicalService.findOne({ patient: req.params.patientId });
      res.json(medical)
    } catch (error) {
      res.status(500).send();
    }
  }

}

module.exports = new MedicalController();