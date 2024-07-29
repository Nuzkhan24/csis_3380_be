const itemController = require('../../controllers/item');

const setupItemRoutes = (router) => {

  router.get('/items', itemController.getItems);

  router.post('/items', itemController.createItem);

  router.put('/items/:id', itemController.putItem);
};

module.exports = { setupItemRoutes };
