'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const wordpressController = require('./../../controllers/wordpress/wordpress.controller');

// /api/wordpress/:url
router.get('/:url', (req, res, next) => {
  wordpressController.getWebsiteFramework(req.params.url)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
