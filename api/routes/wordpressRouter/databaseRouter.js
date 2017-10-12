'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const dbController = require('./../../controllers/wordpress/wordpressDatabase.controller');

router.get('/', (req, res, next) => {
  dbController.getVersions()
    .then((result) => res.json(result))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  dbController.getVersionById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

router.post('/', (req, res, next) => {
  dbController.addVersion(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
