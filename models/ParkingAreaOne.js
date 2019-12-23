const mongoose = require('mongoose');

const ParkingOneSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  booking: {
    type: String
  },
  bookingDetail: {
    type: Date
  }
});

module.exports = ParkingOne = mongoose.model('parkingone', ParkingOneSchema);
