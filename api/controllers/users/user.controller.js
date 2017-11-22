'use strict';

const User = require('./../../lib/db/models/user');
const HttpError = require('./../../lib/utils/http-error');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    console.log('password ' + newUser.password);

    const salt = await bcrypt.genSalt(saltRounds);
    console.log('salt ' + salt);
    const hash = await bcrypt.hash(newUser.password, salt);
    console.log('Hashed password: ' + hash);
    newUser.password = hash;

    return await newUser.save();
  } catch (err) {
    if (err.message.indexOf('E11000 duplicate key error collection') !== -1) {
          throw new HttpError('Bad Request', 'Duplicate key', 400);
        }
    throw new HttpError('Internal error', err.message, 500);
  }
}

async function deleteUser(id) {
  try {
    return await User.findByIdAndRemove(id);
  } catch (err) {
    throw new HttpError('Bad request', 'User cannot be deleted', 400);
  }
}

module.exports = {
  getUsers: getUsers,
  addUser: addUser,
  deleteUser: deleteUser
};
