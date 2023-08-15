import express from "express";
import { Sequelize, DataTypes } from "sequelize";

const app = express();
const port = 3000;

// const sequelize = new Sequelize('postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

// app.get('/questions', async (req, res) => {
//   try {
//     const questions = await Question.findAll();
//     res.json(questions);
//   } catch (error) {
//     console.error('Error fetching questions:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});