'use strict';

// loading eng file
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// routes
const api = require('./api/routes/apiRoutes');
const db = require('./api/lib/db/db');
// morgan for logging http req's
var morgan = require('morgan');

// initialize express
let app = express();

// mongo url
db(process.env.MONGO_URL);

app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/', api);

app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT);
});

module.exports = app;
