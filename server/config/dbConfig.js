const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/quizportal';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);

    console.log('MongoDB Connected:', MONGO_URL);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
