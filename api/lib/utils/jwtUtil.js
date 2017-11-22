'use strict';
const jwt = require('jsonwebtoken');

async function verifyJwt(inputJwt) {
  return jwt.verify(inputJwt, process.env.SECRET_KEY);
}

function signJwt(inputObj) {
  return jwt.sign(inputObj, process.env.SECRET_KEY);
}

module.exports = {
  verifyJwt: verifyJwt
};
