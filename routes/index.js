const express = require('express');
const { setupUserRoutes } = require('./user');

const router = express.Router();

setupUserRoutes(router);

module.exports = router
