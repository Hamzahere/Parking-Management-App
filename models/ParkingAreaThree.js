const mongoose = require('mongoose');

const ParkingThreeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  number: {
    type: Number
  },
  booking: {
    type: Boolean
  },
  bookingDetail: {
    type: Date
  }
});

module.exports = ParkingThree = mongoose.model(
  'parkingthree',
  ParkingThreeSchema
);
