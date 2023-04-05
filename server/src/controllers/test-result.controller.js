const testResultService = require('../services/test-result.service');

class TestResultController {

  async index(req, res) {
    try {
      const testResults = await testResultService.findAll();
      res.json(testResults);
    } catch (error) {
      res.status(500).send();
    }
  }

  async show(req, res) {
    try {
      const testResult = await testResultService.findOne({ _id: req.params.id });
      res.json(testResult);
    } catch (error) {
      res.status(500).send();
    }
  }
}

module.exports = new TestResultController();