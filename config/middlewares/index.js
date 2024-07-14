const express = require('express');
const cors = require('cors');
const apiRoutes = require('../../routes');

const setupMiddlewares = (app) => {
  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use('/api', apiRoutes);
};

module.exports = { setupMiddlewares };
