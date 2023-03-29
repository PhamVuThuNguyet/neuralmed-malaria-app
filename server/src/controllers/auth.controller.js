const userService = require('../services/user.service');
const bcrypt = require('../utils/bcrypt.utils');
const jwt = require('../utils/jwt.utils');
const { MESSAGES } = require('../constants/variables');

class AuthController {

  /**
   * @notice [POST] /api/v1/auth/login
   * @dev API for login
   * @param {*} req Request from client
   * @param {*} res Response to client
   */
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await userService.findOne({ username });
      if(!user) {
        return res.status(400).send(MESSAGES.USER_NOT_EXIST);
      }

      if(!bcrypt.compare(password, user.password)) {
        return res.status(400).send(MESSAGES.WRONG_PASSWORD);
      }

      const { accessToken, refreshToken } = jwt.generateToken({ _id: user._id, role: user.role });
      user.password = undefined;
      res.json({ user, accessToken, refreshToken });
    } catch (error) {
      console.log(error);
      res.status(500).send(); 
    }
  }
}

module.exports = new AuthController();