const { APP_BOOTSTRAP_LISTENER } = require('@angular/core');
const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('flashcards.sqlite');


app.get('/api/flashcards', (req, res) => {});

app.get('/api/flashcards/:id', (req, res) => {});

app.post('/api/flashcards', (req, res) => {});

app.put('/api/flashcards/:id', (req, res) => {});

app.delete('/api/flashcards/:id', (req, res) => {});


app.listen(3000, () => {
  console.log('Mock server is running on port 3000');
});
