'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Roles', [{
      name: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
