'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const authController = require('./../../controllers/auth/auth.controller');

// /api/auth/login
router.post('/login', (req, res, next) => {
  authController.authenticateUser(req.body)
  .then((result) => res.json(result))
  .catch(next);
});

module.exports = router;
