const Routes = {
    'GET /posts': 'PostsController.getAll',
    'POST /posts': 'PostsController.create',
    'DELETE /posts/:id': 'PostsController.remove',
};

module.exports = Routes;
