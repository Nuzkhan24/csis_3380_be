const userController = require('../../controllers/user');

const setupUserRoutes = (router) => {
  router.post('/user/signIn', userController.signIn);

  router.post('/user/signUp', userController.signUp);

  router.post('/user/forgetPassword', userController.forgetPassword);

  router.get('/user/:id', userController.getUser);

  router.put('/user/:id', userController.putUser);
};

module.exports = { setupUserRoutes };
