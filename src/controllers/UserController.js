const models = require('../models');
const { ValidationError, ErrorResponse } = require('../response/error');
const Sequelize = require('sequelize');

const UserController = () => {
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

      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    register,
  };
};

module.exports = UserController;
