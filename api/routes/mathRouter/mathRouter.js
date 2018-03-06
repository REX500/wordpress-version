'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const mathController = require('./../../controllers/math/math.controller');
const ipController = require('../../controllers/math/ip.controller');
// get requests
router.get('/:a/:b', (req, res, next) => {
  mathController.getSum(req.params.a, req.params.b)
    .then((result) => res.json(result))
    .catch(next);
});

router.post('/', (req, res, next) => {
  console.log(req.body.ip);
  ipController.getLocation(req.body.ip)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
