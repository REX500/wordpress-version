'use strict';

// Initiate env
require('dotenv').config();

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

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
module.exports = app;
