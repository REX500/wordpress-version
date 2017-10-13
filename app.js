'use strict';

const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

// routes
const api = require('./api/routes/apiRoutes');
const db = require('./api/lib/db/db');
// morgan for logging http req's
var morgan = require('morgan');

// initialize express
let app = express();

// mongo url
db('mongodb://localhost/wordpress-db');

app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', api);

app.listen(3004, () => {
  console.log('Listening on port 3004');
});

module.exports = app;
