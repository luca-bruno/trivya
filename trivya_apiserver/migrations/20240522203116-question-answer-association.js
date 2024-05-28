'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Answers', {
      fields: ['questionUuid'],
      type: 'foreign key',
      name: 'question_answer_association',
      references: {
        table: 'Questions',
        field: 'uuid'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Answers', 'question_answer_association')
  }
};
