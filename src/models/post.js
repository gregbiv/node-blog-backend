'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    tags: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});
  return Post;
};