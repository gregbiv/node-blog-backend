'use strict';
module.exports = (sequelize, DataTypes) => {
  /**
   * @typedef User
   * @property {string} name.required
   * @property {string} email.required
   * @property {string} password.required
   * @property {integer} roleId
   */
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: true,
        len: {
          args: 3,
          msg: "Name must be at least 3 characters in length"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email address must be valid"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: 3
        }
      }
    },
    roleId: DataTypes.INTEGER
  }, {});
  return User;
};