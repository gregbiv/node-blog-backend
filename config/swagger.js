const SwaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Node.js blog backend',
            version: '0.0.1',
            description: 'Node.js simple app',
            contact: {
                email: 'gregbiv@gmail.com',
            },
        },
        host: 'localhost',
        basePath: '/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['../src/*/*.js'] //Path to the API handle folder
};

module.exports = SwaggerOptions;
