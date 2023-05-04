const mongoose = require('mongoose');

const flashCardSchema = new mongoose.Schema({
  // collection: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  // category: {type: String, required: true },
  // tags: { type:[String], required: false},
  created: {type: Date, default: Date.now},
  modified: {type: Date, default: Date.now},
  // owner: { type: [String], required: true },
  // public: { type: Boolean, default: false }
})
const FlashCard = mongoose.model('FlashCard', flashCardSchema);

module.exports = {
  FlashCard,
  flashCardSchema
}
