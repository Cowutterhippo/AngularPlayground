const express = require('express');
const router = express.Router();
const fsSchema = require('../schema/flashcard-schema');

router.get('/api/flashcards', async(req, res) => {
  const cards = await fsSchema.FlashCard.find();
  console.log(cards);
  res.send(cards).status(200);
});

router.get('/api/flashcards/:id', async (req, res) => {
});

router.post('/api/flashcards', async (req, res) => {
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

router.put('/api/flashcards/:id', (req, res) => {});

router.delete('/api/flashcards/:id', (req, res) => {});

module.exports = router
