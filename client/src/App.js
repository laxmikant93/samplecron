// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/todos').then((response) => {
      setTodos(response.data);
    });
  }, []);

  const addTodo = () => {
    axios.post('http://localhost:5000/todos/add', { text: newTodo }).then(() => {
      setNewTodo('');
      // Refresh the todo list after adding a new todo
      axios.get('http://localhost:5000/todos').then((response) => {
        setTodos(response.data);
      });
    });
  };

  return (
    <div className="App">
      <h1>MERN Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;