const express = require('express');
const wordOftheDayModel = require('../models/wordOfTheDay').default;
const wordsModel = require('../models/word').default;
const router = express.Router();

// Word of the day route
router.get('/', async (req, res) => {
  try {
    let word = await wordOftheDayModel.findOne({ createdAt: { $gte: new Date().setHours(0, 0, 0, 0) } });

    if (!word) {
      let randomWord;
      let isDuplicate = true;
    
      while (isDuplicate) {
        const randomWords = await wordsModel.aggregate([{ $sample: { size: 1 } }]);
        randomWord = randomWords[0];

        const existingWord = await wordOftheDayModel.findOne({ wordId: randomWord._id });
        if (!existingWord) {
          isDuplicate = false;
        }
      }

      const newWord = new wordOftheDayModel({ wordId: randomWord._id });
      word = await newWord.save();
      res.status(201).json(randomWord);
    } else {
      const actualWord = await wordsModel.findById(word.wordId);
      res.json(actualWord);
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch word of the day' });
  }
});

// fetch a word of the day by date
router.get('/:date', async (req, res) => {
  try {
    const date = new Date(req.params.date);
    if (isNaN(date)) {
      return res.status(400).json({ error: 'Invalid date format' });
    }

    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));

    const word = await wordOftheDayModel.findOne({
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    });

    if (!word) {
      return res.status(404).json({ error: 'Word not found' });
    }

    const actualWord = await wordsModel.findById(word.wordId);
    res.json(actualWord);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch the word' });
  }
});

module.exports = router;