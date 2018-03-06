'use strict';

async function getSum(a, b) {
  const response = {
    result: +a + +b
  }
  return response;
}

module.exports = {
  getSum: getSum
};
