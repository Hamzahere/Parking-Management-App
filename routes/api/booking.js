const express = require('express');
const router = express.Router();

//@route  GET api/booking
//@desc TEst Route
//@access public

router.get('/', (req, res) => res.send('Booking route'));

module.exports = router;
