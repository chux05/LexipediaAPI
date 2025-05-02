const express = require('express');
const wordsModel = require('../models/word').default;
const router = express.Router();

// Route to fetch all dictionary entries
router.get('/', async (req, res) => {
  try {
    const entries = await wordsModel.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
});

// fetch a single word by ID
router.get('/:id', async (req, res) => {
  try {
    const word = await wordsModel.findById(req.params.id);
    if (!word) {
      return res.status(404).json({ error: 'Word not found' });
    }
    res.json(word);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch the word' });
  }
});

// fetch single word by word itself
router.get('/search/:word', async (req, res) => {
  try {
    const word = await wordsModel.findOne({ word: req.params.word });
    if (!word) {
      return res.status(404).json({ error: 'Word not found' });
    }
    res.json(word);
  } catch (err) {
    res.status(500).json({ error: 'Failed to finf the word after searching' });
  }
});

// insert a single word
router.post('/', async (req, res) => {
  try {
    const newWord = new wordsModel(req.body);
    const savedWord = await newWord.save();
    res.status(201).json(savedWord);
  } catch (err) {
    res.status(400).json({ error: 'Failed to insert the word' });
  }
});

// insert multiple words
router.post('/bulk', async (req, res) => {
  try {
    const words = await wordsModel.insertMany(req.body);
    res.status(201).json(words);
  } catch (err) {
    res.status(400).json({ error: 'Failed to insert words' });
  }
});

module.exports = router;