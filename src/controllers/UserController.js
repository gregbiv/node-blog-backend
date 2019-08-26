const models = require('../models');
const { ValidationError, ErrorResponse } = require('../response/error');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const UserController = () => {
  /**
   * Creates an User
   * @route POST /login
   * @operationId loginUser
   * @group User - User endpoints
   * @param {User.model} post.body.required - the new user
   * @returns {ErrorResponse.model} 401 - password invalid
   * @returns 200 - User successfully logged-in
   */
  const login = async (req, res) => {
    const loginError = new ValidationError('password', 'password is not valid');
    const {email, password} = req.body;

    try {
      const user = await models.User.findOne({where: {email: email}});

      if (user.validPassword(password)) {
        const userData = {
          id: user.id,
          email: user.email,
          name: user.name,
          roleId: user.roleId,
        };

        const jwtToken = jwt.sign(userData, jwtSecret, {expiresIn: 60 * 60});
        return res.status(200).json({token: jwtToken});
      } else {
        return res.status(401).json(new ErrorResponse(loginError));

      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  /**
   * Creates an User
   * @route POST /register
   * @operationId registerUser
   * @group User - User endpoints
   * @param {User.model} post.body.required - the new user
   * @returns {ErrorResponse.model} 400 - validation failed
   * @returns 201 - User successfully register
   */
  const register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
      await models.User.create({
        name: name,
        email: email,
        password: password,
      });

      return res.status(201).json();
    } catch (err) {
      if (err instanceof Sequelize.ValidationError) {
        const errors = err.errors.map(({ path, message }) => {
          return new ValidationError(path, message);
        });
        return res.status(400).json(new ErrorResponse(errors));
      }

      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    login,
    register,
  };
};

module.exports = UserController;
