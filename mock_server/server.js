const dbInfo = require('./passwords');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/user-routes');
const flashCardRoutes = require('./routes/flashcard-routes');
const mongoose = require('mongoose');

const localDBString = 'mongodb://127.0.0.1:27017';
// const hostedDBString = `mongodb+srv://${dbInfo.username}:${dbInfo.password}@`;
mongoose.connect(localDBString, {
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
);
app.use(usersRoutes);
app.use(flashCardRoutes);

app.listen(3000, () => {
  console.log('Mock server is running on port 3000');
});
