'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const authController = require('./../../controllers/auth/auth.controller');
const authMiddleware = require('./../../lib/middleware/auth.middleware');

// /api/auth/login :POST
router.post('/login', (req, res, next) => {
  authController.authenticateUser(req.body)
  .then((result) => res.json(result))
  .catch(next);
});

// /api/auth/login/check :POST
router.post('/login/check', authMiddleware.authorizeUser(), (req, res, next) => {
  authController.checkLogin()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
