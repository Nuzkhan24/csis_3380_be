const express = require('express');
const cors = require('cors');

const setupMiddlewares = (app) => {
  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
};

module.exports = { setupMiddlewares }