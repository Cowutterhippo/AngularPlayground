const dbInfo = require('./passwords');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/user-routes');
const flashCardRoutes = require('./routes/flashcard-routes');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/playground', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

const express = require('express');
const cors = require('cors');
const app = express();
app.use(
  cors(
    {
      origin: 'http://localhost:4200' // Only allow requests from http://localhost:4200
    }
    ),
  bodyParser.json(),
  usersRouter,
  flashCardRoutes
);

app.listen(3000, () => {
  console.log('Mock server is running on port 3000');
});
