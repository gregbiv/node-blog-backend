const auth = require('../src/middlewares/auth');

const Routes = {
    'POST /posts': {
        path: 'PostController.create',
        middlewares: [
            auth,
        ],
    },

    'POST /remove': {
        path: 'PostController.remove',
        middlewares: [
            auth,
        ],
    },

    'GET /posts': 'PostController.getAll',
};

module.exports = Routes;
