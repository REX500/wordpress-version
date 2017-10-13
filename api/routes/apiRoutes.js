'use strict';
const express = require('express');
const router = express.Router();

// V2 routers would go here
const wordpressRouter = require('./wordpressRouter/wordpressRouter');
const databaseRouter = require('./wordpressRouter/databaseRouter');

// ENDPOINTS

// Endpoint: /api/wordpress/
router.use('/wordpress', wordpressRouter);

// Endpoint: /api/database/
router.use('/database', databaseRouter);

module.exports = router;
