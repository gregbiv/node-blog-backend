const mocha = require('mocha');
const describe = mocha.describe;

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const UserModel = require('../../src/models/post');

/**
 * Database Tests
 */
describe('Database', () => {
    // Check our db model table name
    describe('models/Post - Table Name Check', () => {
        const Comm = UserModel(sequelize, dataTypes);
        checkModelName(Comm)('Post')
    });

    // Check table properties
    describe('models/User - Properties Check', () => {
        const Comm = UserModel(sequelize, dataTypes);
        const instance = new Comm()
        ;['title', 'description', 'userId', 'tags'].forEach(
            checkPropertyExists(instance)
        )
    })
});
