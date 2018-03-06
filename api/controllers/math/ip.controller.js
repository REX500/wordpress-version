'use strict';

const rp = require('request-promise');
const HttpError = require('./../../lib/utils/http-error');
const request = require('request');
// const rp = require('request-promise');
const ipUrl = 'http://ip-api.com/json';
const apiKey = '1c17c3849d6047df0a59349cb36be90d';
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';

async function getLocation(ip) {
  console.log('getLocation function called');
  if (!ip) {
      throw new HttpError('Bad request', 'Ip not specified', 400);
  }

  const request = await rp(ipUrl + '/' + ip);
  if (request) {
    const res = JSON.parse(request);
    const foo = weatherUrl + res.city + "&APPID=" + apiKey;

    const weatherReq = await rp(foo);
    if (weatherReq) {
      const weatherRes = JSON.parse(weatherReq);

      return {
        city: res.city,
        weather: weatherRes.weather[0].main + ', ' + weatherRes.weather[0].description
      };
    }
  }
}

module.exports = {
  getLocation: getLocation
}
