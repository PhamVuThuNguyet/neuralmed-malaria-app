const { Medical } = require('../models');

class MedicalService {

  findMany(data) {
    return Medical.find(data).populate('doctor', '-password').populate('patient');
  }

  findOne(data) {
    return Medical.findOne(data).populate('doctor', '-password').populate('patient')
  }

  createOne(data) {
    return Medical.create(data);
  }
}

module.exports = new MedicalService();