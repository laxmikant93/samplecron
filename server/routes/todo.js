// routes/todo.js
const router = require('express').Router();
let Todo = require('../models/todo');

// Get all todos
router.route('/').get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a new todo
router.route('/add').post((req, res) => {
  const todoText = req.body.text;

  const newTodo = new Todo({
    text: todoText,
  });

  newTodo
    .save()
    .then(() => res.json('Todo added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
