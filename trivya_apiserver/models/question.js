'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

export const Question = sequelize.define(
  'Question',
  {
    // Model attributes are defined here
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contentMt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fact: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    factMt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM,
      values: ['easy', 'medium', 'hard', 'extreme', 'temp'],
      allowNull: false,
    },
  },
  {
    // Other model options go here
  },
);

Question.associate = (models) => {
  Question.hasMany(models.Answer, {
    foreignKey: 'question_uuid',
    as: 'answers',
  });
};