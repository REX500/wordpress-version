'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const dbController = require('./../../controllers/wordpress/wordpressDatabase.controller');

// api/database/ GET
router.get('/', (req, res, next) => {
  dbController.getVersions()
    .then((result) => res.json(result))
    .catch(next);
});

// api/database/:id GET
router.get('/:id', (req, res, next) => {
  dbController.getVersionById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

// api/database/ POST
router.post('/', (req, res, next) => {
  console.log(req);
  dbController.addVersion(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
