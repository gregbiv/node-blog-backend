/**
 * third party libraries
 */
const bodyParser = require('body-parser');
const express = require('express');
const mapRoutes = require('express-routes-mapper');
const routes = require('../config/routes');
const swaggerOptions = require('../config/swagger');
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

// documentation
const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(swaggerOptions);

module.exports = app;
