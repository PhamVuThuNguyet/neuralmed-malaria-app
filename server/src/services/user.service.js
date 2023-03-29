const { User } = require('../models');

class UserService {
  
  createOne(data) {
    return User.create(data);
  }

  findOne(data) {
    return User.findOne(data);
  }

}

module.exports = new UserService();
