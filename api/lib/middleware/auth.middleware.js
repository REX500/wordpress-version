'use strict';
const HttpError = require('./../utils/http-error');
const userModel = require('../db/models/user');
const jwtUtil = require('./../utils/jwtUtil')

function extractIp(req, res, next) {
  let logInfo = {};
  logInfo.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null);
  logInfo.timestamp = req._startTime;
  req.logInfo = logInfo;
  next();
}

function authorizeUser() {
  return async function(req, res, next) {
    const jwt = req.headers.authorization || req.body.authorization;
    let verifiedJwt = null;
    try {
      verifiedJwt = await jwtUtil.verifyJwt(jwt);
    } catch (err) {
      return next(err);
    }
    if (verifiedJwt) {
      const user = await userModel.findById(verifiedJwt.id);
      if (user) {
        console.log('User found');
        return next();
      }
    } else {
      throw new HttpError('Bad Request', 'Unauthirozed user', 401);
    }
  };
}

module.exports = {
  extractIp: extractIp,
  authorizeUser: authorizeUser
};
