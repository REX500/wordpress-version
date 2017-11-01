'use strict';

const co = require('co');
const WordpressModel = require('./../../lib/db/models/wordpress');
const HttpError = require('./../../lib/utils/http-error');
const validators = require('./../../lib/validators/validator');

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
  console.log('Adding wordpress version...');
  let wordpress = new WordpressModel({
    url: body.url,
    isWordpress: body.isWordpress,
    version: body.version
  });
  console.log('Object constructed....');
  console.log('Validating...');

  /*********************************************/
  /*      VALIDATING WEB URL AND VERSION       */
  /*********************************************/

  if (wordpress.url && !validator.valWebsite(wordpress.url)) {
    throw new HttpError('Bad request', 'Invalid url format', 400);
  }
  if (wordpress.version && !validator.valString(wordpress.version)) {
    throw new HttpError('Bad request', 'Invalid version', 400);
  }
  
  try {
    return await wordpress.save();
  } catch (err) {
    throw new HttpError('Bad request', 'Cannot save version', 500);
  }
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
