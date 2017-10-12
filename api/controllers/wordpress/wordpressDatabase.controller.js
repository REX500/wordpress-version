'use strict';

const co = require('co');
const WordpressModel = require('./../../lib/db/models/wordpress');
const HttpError = require('./../../lib/utils/http-error');

// GETTING WORDPRESS VERSIONS

// ADDING WORDPRESS VERSION INTO DATABASE
async function addVersion(input) {
  let wordpress = new WordpressModel({
    url: input.url,
    isWordpress: input.isWordpress,
    version: input.version
  });

  try {
    return await wordpress.save();
  } catch (err) {
    throw new HttpError('Bad request', 'Cannot save version', 500);
  }
}

module.exports = {
  addVersion: addVersion
}
