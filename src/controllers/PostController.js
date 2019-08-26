const models = require('../models');
const PostResponse = require('../response/post');
const { ValidationError, ErrorResponse } = require('../response/error');
const Sequelize = require('sequelize');

const PostController = () => {
  /**
   * Creates a Post
   * @route POST /posts
   * @operationId createPost
   * @group Post - Post endpoints
   * @param {Post.model} post.body.required - the new post
   * @returns {ErrorResponse.model} 400 - validation failed
   * @returns 201 - Post successfully created
   */
  const create = async (req, res) => {
    const { title, description, tags } = req.body;
    try {
      await models.Post.create({
        title: title,
        description: description,
        userId: req.userData.id,
        tags: tags,
      });

      return res.status(201).json()
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

  /**
   * Updates a Post
   * @route PATCH /posts
   * @operationId patchUpdate
   * @group Post - Post endpoints
   * @param {Post.model} post.body.required - the new post
   * @returns {ErrorResponse.model} 400 - validation failed
   * @returns {Post.model} 200 - Post successfully created
   */
  const update = async (req, res) => {
    const { title, description, tags } = req.body;
    try {
      await models.Post.update({
        title: title,
        description: description,
        tags: tags,
      },{
        where: {
          id: req.params.id
        },
        returning: true,
      }).then(function([rowsUpdate, [updatedPost]]) {
        return res.status(200).json(updatedPost)
      });
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

  /**
   * Removes post by given ID
   * @route DELETE /posts/{id}
   * @operationId removePost
   * @group Post - Post endpoints
   * @param {integer} id.path.required - id, eg:123
   * @returns 202 - Post successfully removed
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
   * @operationId getPost
   * @group Post - Post endpoints
   * @param {string} perPage.query - limit results per page
   * @param {string} page.query - current page
   * @param {string} order.query - order by
   * @returns {PostResponse.model} 200 - An array of user info
   * @returns 500 - Unexpected error
   */
  const getAll = async (req, res) => {
    try {
      const perPage = 25;
      const page = 1;
      const options = {
        page: page,
        paginate: perPage,
        order: [['createdAt', 'DESC']],
        where: {}
      };

      const { docs, total } = await models.Post.paginate(options);

      return res.status(200).json(new PostResponse(page, perPage, total, docs));
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    create,
    update,
    remove,
    getAll,
  };
};

module.exports = PostController;
