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
        len: {
          args: [6, 128],
          msg: "Email address must be between 6 and 128 characters in length"
        },
        isEmail: {
          msg: "Email address must be valid"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3
        }
      }
    },
    roleId: DataTypes.INTEGER
  }, {});
  return User;
};