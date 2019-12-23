const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    requiured: true
  },
  bookingTime: {
    type: Date
  },
  bookingSlot: {
    type: String
  },
  feedback: {
    type: String
  },
  receiptPrint: {
    type: String
  }
});

module.exports = User = mongoose.model('user', UserSchema);
