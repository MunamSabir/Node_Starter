const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB is Connnected');
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = connectDB;
