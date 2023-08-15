'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Questions', [{
      content: 'What year did the Battle of Hastings occur?',
      category: 'History',
      fact: 'Yep it really did lol',
      difficulty: 'Hard',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
