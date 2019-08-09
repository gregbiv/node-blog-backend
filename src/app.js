/**
 * third party libraries
 */
const bodyParser = require('body-parser');
const express = require('express');
const mapRoutes = require('express-routes-mapper');
const routes = require('../config/routes');
const mappedRoutes = mapRoutes(routes, 'src/controllers/');

/**
 * express application
 */
const app = express();

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// fill routes for express application
app.use('/', mappedRoutes);

module.exports = app;
