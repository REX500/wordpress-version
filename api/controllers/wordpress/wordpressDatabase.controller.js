'use strict';

const co = require('co');
const WordpressModel = require('./../../lib/db/models/wordpress');
const HttpError = require('./../../lib/utils/http-error');

// GETTING WORDPRESS VERSIONS
async function getVersions() {
  return WordpressModel.find();
}

// GETTING CERTAIN VERIONS
async function getVersionById(id) {
  return WordpressModel.findById(id);
}

// ADDING WORDPRESS VERSION INTO DATABASE
async function addVersion(body) {
  console.log(body.url+body.isWordpress+body.version);
  let wordpress = new WordpressModel({
    url: body.url,
    isWordpress: body.isWordpress,
    version: body.version
  });

  return await wordpress.save();
  // try {
  //   return await wordpress.save();
  // } catch (err) {
  //   throw new HttpError('Bad request', 'Cannot save version', 500);
  // }
}

// DELETING BY ID
async function deleteVersion(id) {
  try {
    return await WordpressModel.findByIdAndRemove(id);
  } catch (err) {
    if (err.message.indexOf('Cast to objectId failed') !== -1) {
      throw new HttpError('Bad request', 'Version not found for id', 400);
    } else {
      throw new HttpError('Bad request', 'Internal server error', 500);
    }
  }
}

module.exports = {
  getVersions: getVersions,
  getVersionById: getVersionById,
  addVersion: addVersion,
  deleteVersion: deleteVersion
}
