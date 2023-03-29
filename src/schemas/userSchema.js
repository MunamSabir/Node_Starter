// importing mongoose dependency for user schema and model creation
const mongoose = require(`mongoose`);

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, `please provide valid username`],
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: [true, `please provide valid phoneNumber`],
    },

    password: {
      type: String,
      required: [true, `please provide valid password`],
    },

    gender: {
      type: String,
      enum: ['male', 'female'],
      default: 'male',
    },
  },
  { timestamps: true }
);

const user = mongoose.model(`users`, userSchema);

/// exporting user model to usermiddleware for querying user collection
module.exports = user;
