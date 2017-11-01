'use strict';

let checkUndefined = function(input) {
  if (!input || input === 'undefined') {
    return false;
  } else {
    return true;
  }
};

let valEmail = function(inputEmail) {
  if (!checkUndefined(inputEmail)) {
    return false;
  }
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(inputEmail);
};

let valPhone = function(inputPhone) {
  if (!checkUndefined(inputPhone)) {
    return false;
  }
  let regex = /^(\+)?(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\s?\d{1,14}$/;
  return regex.test(inputPhone);
};

let valWebsite = function(inputUrl) {
  if (!checkUndefined(inputUrl)) {
    return false;
  }
  let regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  return regex.test(inputUrl);
};

let valArray = function(inputArray) {
  if (!checkUndefined(inputArray)) {
    return false;
  }
  return Array.isArray(inputArray);
};

let valNumber = function(inputNumber) {
  if (!checkUndefined(inputNumber)) {
    return false;
  }
  return !isNaN(inputNumber);
};

let valString = function(inputString) {
  if (!checkUndefined(inputString)) {
    return false;
  } else if (typeof inputString === 'string' || inputString instanceof String) {
    // it's a string
    return true;
  } else {
    // it's something else
    return false;
  }
};

let valMinLength = function(input, minlength) {
  if (!checkUndefined(input)) {
    return false;
  }
  return input.length >= minlength;
};

let valMaxLength = function(input, maxlength) {
  if (!checkUndefined(input)) {
    return false;
  }
  return input.length <= maxlength;
};

let valMinValue = function(input, minValue) {
  if (!checkUndefined(input) || isNaN(input)) {
    return false;
  }
  return input >= minValue;
};

let valMaxValue = function(input, maxValue) {
  if (!checkUndefined(input) || isNaN(input)) {
    return false;
  }
  return input <= maxValue;
};

let valEqual = function(input1, input2) {
  if (!checkUndefined(input1) || !checkUndefined(input2)) {
    return false;
  }
  return input1 == input2;
};

let valNotEqual = function(input1, input2) {
  if (!checkUndefined(input1) || !checkUndefined(input2)) {
    return false;
  }
  return input1 != input2;
};

module.exports = {
  checkUndefined: checkUndefined,
  valEmail: valEmail,
  valPhone: valPhone,
  valWebsite: valWebsite,
  valArray: valArray,
  valNumber: valNumber,
  valString: valString,
  valMinLength: valMinLength,
  valMaxLength: valMaxLength,
  valMinValue: valMinValue,
  valMaxValue: valMaxValue,
  valEqual: valEqual,
  valNotEqual: valNotEqual
};
