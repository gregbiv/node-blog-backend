'use strict';
const sequelizePaginate = require('sequelize-paginate');

module.exports = (sequelize, DataTypes) => {
  /**
   * @typedef Post
   * @property {string} title.required
   * @property {string} description.required
   * @property {integer} userId.required
   * @property {Array.<string>} tags.required
   */
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    tags: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});

  sequelizePaginate.paginate(Post);
  return Post;
};