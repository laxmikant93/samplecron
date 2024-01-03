// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://laxx:laxx123@cluster0.cr7y2bn.mongodb.net/mernapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define routes
const todoRouter = require('./routes/todo');
app.use('/todos', todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
