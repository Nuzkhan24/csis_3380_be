const { setupUserRoutes } = require('./user');

const setupApiRoutes = (app) => {
    setupUserRoutes(app);
}

module.exports = { setupApiRoutes }
