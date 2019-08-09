const models = require('../models');

const PostController = () => {
  /**
   * Creates a Post
   * @route POST /posts
   * @group private - Private endpoints
   * @param {Post.model} post.body.required - the new post
   * @returns {object} 201 - Post successfully created
   */
  const create = async (req, res) => {
    const { body } = req;
    try {
      await models.Post.create({
        title: body.title,
        description: body.description,
        userId: body.userId,
        tags: body.tags,
      });

      return res.status(201).json()
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  /**
   * Removes post by given ID
   * @route DELETE /posts/{id}
   * @group private - Private endpoints
   * @param {integer} id.path - id, eg:123
   * @returns {object} 202 - Post successfully removed
   * @returns {Error}  500 - Unexpected error
   */
  const remove = async (req, res) => {
    try {
      await models.Post.destroy({
        where: {
          id: req.params.id
        }
      });

      return res.status(202).json()
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  /**
   * Returns all available posts
   * @route GET /posts
   * @group public - Public endpoints
   * @returns {object} 200 - An array of user info
   * @returns {Error}  500 - Unexpected error
   */
  const getAll = async (req, res) => {
    try {
      const results = await models.Post.findAll();

      return res.status(200).json({ results });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    create,
    remove,
    getAll,
  };
};

module.exports = PostController;
