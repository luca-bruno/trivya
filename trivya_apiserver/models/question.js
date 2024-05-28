'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Question = sequelize.define('question',
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
      // TODO: change
      type: DataTypes.STRING
      // type: DataTypes.ENUM,
      // values: ['Easy', 'Medium', 'Hard', 'Extreme'],
      // allowNull: false,
    },
  },
  {
    // Other model options go here
  },
);



// Question.associate = (models) => {
//   Question.hasMany(models.Answer, {
//     foreignKey: 'question_uuid',
//     as: 'answers',
//   });
// };


sequelize.sync({ alter: true }).then(() => {

}).catch(err => console.log(err));

module.exports = Question;
