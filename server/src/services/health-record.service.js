const { HealthRecord } = require('../models');

class HealthRecordService {

  findMany(data) {
    return HealthRecord.find(data).populate('doctor', '-password').populate('patient');
  }

  findOne(data) {
    return HealthRecord.findOne(data).populate('doctor', '-password').populate('patient')
  }

  createOne(data) {
    return HealthRecord.create(data);
  }

  updateById(id, data) {
    return HealthRecord.findOneAndUpdate({ _id: id }, data, { new: true });
  }
}

module.exports = new HealthRecordService();