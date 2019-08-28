// features/support/steps.js
const { Given } = require("cucumber");
const models = require('../../src/models');

Given('empty table {string}', function (string) {
    const modelNames = string.split(',');

    modelNames.forEach(function(model) {
        models[model].destroy({
            where: {},
            truncate: true
        });
    });
});

Given('list of content in {string} table', function (modelName, dataTable) {
    dataTable.hashes().forEach(function (row) {
        // checking for arrays
        for(const propertyName in row) {
            if (row[propertyName].includes(',')) {
                row[propertyName] = row[propertyName].split(',');
            }
        }

        models[modelName].create(row);
    });
});
