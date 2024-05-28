'use strict';
/** @type {import('sequelize-cli').Migration} */

const DataTypes = require('sequelize/lib/data-types');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Answers', {
      uuid: {
        // allowNull: false,
        // primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      content: {
        type: DataTypes.TEXT
      },
      contentMt: {
        type: DataTypes.TEXT
      },
      isCorrect: {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      questionUuid: {
        type: DataTypes.UUID
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Answers');
  }
};