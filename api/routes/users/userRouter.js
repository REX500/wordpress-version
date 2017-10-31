'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const userController = require('./../../controllers/users/user.controller');

// add user
// Endpoint: /api/users/
router.post('/', (req, res, next) => {
  userController.addUser(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
