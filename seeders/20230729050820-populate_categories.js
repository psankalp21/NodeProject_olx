'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        categoryname: 'Electronics',
      },
      {
        categoryname: 'Fashion',
      },
      {
        categoryname: 'Vehicles',
      },
      {
        categoryname: 'Electricals',
      },
      {
        categoryname: 'Misc.',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

  }
};
