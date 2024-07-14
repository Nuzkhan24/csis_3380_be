const userController = require('../../controllers/user');

const setupUserRoutes = (router) => {
  router.post('/api/signIn', userController.signIn);

  router.post('/api/signUp', userController.signUp);

  router.get('/api/users/:id', userController.getUser);

  router.put('/api/users/:id', userController.putUser);
};

module.exports = { setupUserRoutes };
