'use strict';
const express = require('express');
const router = express.Router();

// V2 routers would go here
const wordpressRouter = require('./wordpressRouter/wordpressRouter');
// ENDPOINTS

// Endpoint: /api/wordpress/
router.use('/wordpress', wordpressRouter);

module.exports = router;
