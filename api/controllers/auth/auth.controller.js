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

  const isMatch = bcrypt.compareSync(body.password, user.password);

  if (isMatch) {
    const token = jwt.sign(user, 'secret', { expiresIn: 604800});

    return await { token: 'JWT' + token};
  } else {
    throw new HttpError('Bad request', 'Wrong password', 400);
  }
}

module.exports = {
  authenticateUser
}
