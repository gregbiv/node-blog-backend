'use strict';
module.exports = (sequelize, DataTypes) => {
  /**
   * @typedef Post
   * @property {string} title
   * @property {string} description - Some description for product
   * @property {integer} userId
   * @property {Array.<string>} tags
   */
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    tags: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});
  return Post;
};