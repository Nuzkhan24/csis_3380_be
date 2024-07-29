const express = require('express');
const { setupUserRoutes } = require('./user');
const { setupItemRoutes } = require('./item');

const router = express.Router();

setupUserRoutes(router);
setupItemRoutes(router);

module.exports = router
