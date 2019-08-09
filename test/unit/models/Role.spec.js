const mocha = require('mocha')
const describe = mocha.describe

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const UserModel = require('../../../models/role');

/**
 * Database Tests
 */
describe('Database', () => {
    // Check our db model table name
    describe('models/Role - Table Name Check', () => {
        const Comm = UserModel(sequelize, dataTypes);
        checkModelName(Comm)('Role')
    });

    // Check table properties
    describe('models/Role - Properties Check', () => {
        const Comm = UserModel(sequelize, dataTypes);
        const instance = new Comm()
        ;['name'].forEach(
            checkPropertyExists(instance)
        )
    })
});
