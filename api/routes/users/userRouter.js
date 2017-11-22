'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const userController = require('./../../controllers/users/user.controller');
const authMiddleware = require('./../../lib/middleware/auth.middleware');

// ENDPOINT /api/users/ :GET
router.get('/', (req, res, next) => {
  userController.getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

// add user
// ENDPOINT /api/users/ :POST
router.post('/', (req, res, next) => {
  userController.addUser(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

// ENDPOINT /api/users/:id :DELETE
router.delete('/:id', authMiddleware.authorizeUser(), (req, res, next) => {
  userController.deleteUser(req.params.id)
    .then((result) => res.json())
    .catch(next);
});

module.exports = router;
