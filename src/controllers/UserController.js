const models = require('../models');

const UserController = () => {
  /**
   * Creates an User
   * @route POST /register
   * @operationId registerUser
   * @group User - User endpoints
   * @param {User.model} post.body.required - the new user
   * @returns 201 - User successfully register
   */
  const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      await models.User.create({
        name: name,
        email: email,
        password: password,
      });

      return res.status(201).json()
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    register,
  };
};

module.exports = UserController;
