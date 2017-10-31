'use strict';
const express = require('express');
const router = express.Router();

// V2 routers would go here
const wordpressRouter = require('./wordpressRouter/wordpressRouter');
const databaseRouter = require('./wordpressRouter/databaseRouter');
const authRouter = require('./auth/authRouter');
const userRouter = require('./users/userRouter');

// ENDPOINTS

// Endpoint: /api/wordpress/
router.use('/wordpress', wordpressRouter);

// Endpoint: /api/database/
router.use('/database', databaseRouter);

// Endpoint: /api/auth/
router.use('/auth', authRouter);

// Endpoint: /api/users/
router.use('/users', userRouter);

module.exports = router;
