const mocha = require('mocha');
const describe = mocha.describe;

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const UserModel = require('../../src/models/user');

/**
 * Database Tests
 */
describe('Database', () => {
    // Check our db model table name
    describe('models/User - Table Name Check', () => {
        const Comm = UserModel(sequelize, dataTypes);
        checkModelName(Comm)('User')
    });

    // Check table properties
    describe('models/User - Properties Check', () => {
        const Comm = UserModel(sequelize, dataTypes);
        const instance = new Comm()
        ;['name', 'email', 'roleId'].forEach(
            checkPropertyExists(instance)
        )
    })
});
