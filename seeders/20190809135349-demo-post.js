'use strict';

module.exports = {
  up: async (queryInterface) => {
    const userId = await queryInterface.rawSelect('Users', {
      where: {
        email: 'gregbiv@gmail.com',
      },
    }, ['id']);

    return queryInterface.bulkInsert('Posts', [{
      title: 'Lorem ipsum',
      description: 'Dolorem sit amet',
      userId: userId,
      tags: [
          'lorem', 'ipsum', 'dolorem', 'sit', 'amet',
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
