'use strict';

const User = require('./../../lib/db/models/user');
const HttpError = require('./../../lib/utils/http-error');
const bcrypt = require('bcryptjs');

async function getUsers() {
  return await User.find({});
}

async function addUser(body) {
  // FIXME: create email and string validators!!
  try {
    const newUser = new User({
      name: body.name,
      email: body.email,
      password: body.password,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newUser.password, salt);
    newUser.password = hash;

    return await newUser.save();
  } catch (err) {
    if (err.message.indexOf('E11000 duplicate key error collection') !== -1) {
          throw new HttpError('Bad Request', 'Duplicate key', 400);
        }
    throw new HttpError('Internal error', err.message, 500);
  }
}

module.exports = {
  getUsers: getUsers,
  addUser: addUser
};
