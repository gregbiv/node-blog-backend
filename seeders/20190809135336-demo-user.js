'use strict';

module.exports = {
  up: async (queryInterface) => {
    const roleId = await queryInterface.rawSelect('Roles', {
      where: {
        name: 'admin',
      },
    }, ['id']);

    return queryInterface.bulkInsert('Users', [{
      name: 'Gregory',
      email: 'gregbiv@gmail.com',
      password: 123,
      roleId: roleId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
