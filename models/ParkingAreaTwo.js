const mongoose = require('mongoose');

const ParkingTwoSchema = new mongoose.Schema({
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

module.exports = ParkingTwo = mongoose.model('parkingtwo', ParkingTwoSchema);
