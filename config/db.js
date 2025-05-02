const mongoose = require('mongoose');
const winston = require('winston');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    winston.info('Connected to MongoDB');
  } catch (err) {
    winston.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;