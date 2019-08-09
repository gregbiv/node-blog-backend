const models = require('../models');

const PostController = () => {
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
