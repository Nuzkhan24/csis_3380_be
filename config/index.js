require('dotenv').config();
const { setupDatabase } = require('./db');
const { setupMiddlewares } = require('./middlewares');

const configApp = (app) => {
  setupDatabase();
  setupMiddlewares(app)
};

module.exports = { configApp }
