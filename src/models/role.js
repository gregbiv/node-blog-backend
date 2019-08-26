'use strict';
module.exports = (sequelize, DataTypes) => {
  /**
   * @typedef Role
   * @property {string} name.required
   */
  const Role = sequelize.define('Role', {
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
  }, {});
  return Role;
};
