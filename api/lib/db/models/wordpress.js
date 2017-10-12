'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

let wordpress = mongoose.Schema({
  url: {
    type: String,
    unique: false
  },
  isWordpress: {
    type: Boolean,
    unique: false
  },
  version: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('wordpress', wordpress)
