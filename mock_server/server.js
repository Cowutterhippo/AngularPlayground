const dbInfo = require('./passwords');
const bodyParser = require('body-parser');
const fsSchema = require('./schema/flashcard-schema');

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
  bodyParser.json()
);


app.get('/api/flashcards', async(req, res) => {
  const cards = await fsSchema.FlashCard.find();
  console.log(cards);
  res.send(cards).status(200);
});

app.get('/api/flashcards/:id', async (req, res) => {
});

app.post('/api/flashcards', async (req, res) => {
  // let collection = await db.collection('flashcards');
  console.log(req.body);

  const card = new fsSchema.FlashCard({
    question: req.body?.question,
    answer: req.body?.answer
  });
  // console.log(card);
  card.save().then(
    result=>{
      res.send(result).status(204);
    }
  ).catch(
    error => {
      console.error(error)
  })
  // let result = await collection.insertOne(card);
  // const result  = await FlashCard.create({
  //   collection: req?.collection,
  //   question: req?.question,
  //   answer: req?.answer
  // })
  // console.log(result);
});

app.put('/api/flashcards/:id', (req, res) => {});

app.delete('/api/flashcards/:id', (req, res) => {});


app.listen(3000, () => {
  console.log('Mock server is running on port 3000');
});
