const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('flashcards.db');

db.run(`
  CREATE TABLE IF NOT EXISTS flashcards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT,
    answer TEXT,
    category TEXT,
    difficulty INTEGER
  )`)
