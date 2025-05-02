require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const winston = require('winston');
const connectDB = require('./config/db');
const wordRoutes = require('./routes/word');
const wordOfTheDayRoutes = require('./routes/wordOfTheDay');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(helmet());

// Logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' })
  ]
});

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/words', wordRoutes);
app.use('/api/wordoftheday', wordOfTheDayRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});