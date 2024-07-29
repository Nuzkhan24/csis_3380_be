const express = require('express');
const { setupItemRoutes } = require('./item');

const router = express.Router();

setupItemRoutes(router);

module.exports = router
