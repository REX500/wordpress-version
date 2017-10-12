'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// routes
const api = require('./api/routes/apiRoutes');
const db = require('./api/lib/db/db');

// initialize express
let app = express();

// mongo url
db('mongodb://localhost/wordpress-db');

app.disable('x-powered-by');
// app.use(logger('dev'));
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', api);

app.listen(3004, () => {
  console.log('Listening on port 3004');
});
module.exports = app;
