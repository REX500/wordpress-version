'use strict';

const HttpError = require('./../../lib/utils/http-error');
const User = require('./../../lib/db/models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function authenticateUser(body) {
  const user = await User.findOne({email: body.email});

  if (!user) {
    throw new HttpError('Bad request', 'Wrong email', 404);
  }
  console.log('User found');

  const isMatch = bcrypt.compareSync(body.password, user.password);

  if (isMatch) {
    console.log('Its a match');
    // console.log(user);
    const jwtSignObject = {
      id: user.id,
      user: user.toJSON()
    };
    const token = jwt.sign(jwtSignObject, process.env.SECRET_KEY, {
      expiresIn: 604800
    });

    return await { token: token};
  } else {
    throw new HttpError('Bad request', 'Wrong password', 400);
  }
}

async function checkLogin() {
  return {status: 'logged in'};
}

module.exports = {
  authenticateUser,
  checkLogin
}
