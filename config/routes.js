const auth = require('../src/middlewares/auth');

const Routes = {
    'POST /posts': {
        path: 'PostController.create',
        middlewares: [
            auth,
        ],
    },

    'PATCH /posts/:id': {
        path: 'PostController.update',
        // middlewares: [
        //     auth,
        // ],
    },

    'DELETE /posts/:id': {
        path: 'PostController.remove',
        middlewares: [
            auth,
        ],
    },

    'GET /posts': 'PostController.getAll',
    'POST /user/login': 'UserController.login',
    'POST /user/register': 'UserController.register',
};

module.exports = Routes;
