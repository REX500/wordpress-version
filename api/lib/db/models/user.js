'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

let user = mongoose.Schema({
  name: String,
  email: { type: String, required: true},
  password: { type: String, required: true},
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('user', user);
