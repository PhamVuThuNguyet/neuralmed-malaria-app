const userService = require("../services/user.service");

class AdminController {
  
  /**
   * @notice [POST] /api/v1/admin/add-user
   * @dev API for create new user of system
   * @param {*} req Request from client 
   * @param {*} res Response to client
   */
  async addUser(req, res) {
    try {
      await userService.createOne(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  }

}

module.exports = new AdminController();
