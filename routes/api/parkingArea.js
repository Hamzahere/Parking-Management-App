const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const ParkingAreaOne = require('../../models/ParkingAreaOne');
const ParkingAreaTwo = require('../../models/ParkingAreaTwo');
const ParkingAreaThree = require('../../models/ParkingAreaThree');
const User = require('../../models/Users');

//@route GET api/ParkingArea/viewParkingAreaOne
//@desc  view parkingareaone
//@access private

router.get('/viewParkingAreaOne', auth, async (req, res) => {
  try {
    const parkingAreaOneAvailable = await ParkingAreaOne.findOne({
      booking: false
    });

    if (!parkingAreaOneAvailable) {
      return res
        .status(400)
        .json({ msg: 'There is no parking slot available' });
    }
    res.json(parkingAreaOneAvailable);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route GET api/ParkingArea/viewParkingAreaTwo
//@desc  view parkingareaone
//@access private

router.get('/viewParkingAreaTwo', auth, async (req, res) => {
  try {
    const parkingAreaTwoAvailable = await ParkingAreaTwo.findOne({
      booking: false
    });

    if (!parkingAreaTwoAvailable) {
      return res
        .status(400)
        .json({ msg: 'There is no parking slot available' });
    }
    res.json(parkingAreaTwoAvailable);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/viewParkingAreaThree', auth, async (req, res) => {
  try {
    const parkingAreaThreeAvailable = await ParkingAreaThree.findOne({
      booking: false
    });

    if (!parkingAreaThreeAvailable) {
      return res
        .status(400)
        .json({ msg: 'There is no parking slot available' });
    }
    res.json(parkingAreaThreeAvailable);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route POST api/ParkingArea/One
//@desc  create or update parkingarea this will be done by admin
//@access private

router.post(
  '/One',
  [
    auth,
    [
      // check("number", "slot number is required")
      //   .not()
      //   .isEmpty(),
      check('booking', 'booked or not is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { booking, bookingDetail } = req.body;

    //Build Parking slot object
    const parkingslot = {};
    // if (number) {
    //   parkingslot.number = number;
    // }
    if (booking) {
      parkingslot.booking = booking;
    }
    if (bookingDetail) {
      parkingslot.bookingDetail = bookingDetail;
    }

    //Create a parking slot in PArkignAreaOne
    try {
      let parkingslotcreated = new ParkingAreaOne(parkingslot);
      await parkingslotcreated.save();
      res.json(parkingslotcreated);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

//@route POST api/ParkingArea/Two
//@desc  create or update parkingarea this will be done by admin
//@access private

router.post(
  '/Two',
  [
    auth,
    [
      // check("number", "slot number is required")
      //   .not()
      //   .isEmpty(),
      check('booking', 'booked or not is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { booking, bookingDetail } = req.body;

    //Build Parking slot object
    const parkingslot = {};
    // if (number) {
    //   parkingslot.number = number;
    // }
    if (booking) {
      parkingslot.booking = booking;
    }
    if (bookingDetail) {
      parkingslot.bookingDetail = bookingDetail;
    }

    //Create a parking slot in PArkignAreaTwo
    try {
      let parkingslotcreated = new ParkingAreaTwo(parkingslot);
      await parkingslotcreated.save();
      res.json(parkingslotcreated);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

//@route POST api/ParkingArea/Three
//@desc  create or update parkingarea this will be done by admin
//@access private

router.post(
  '/Three',
  [
    auth,
    [
      check('booking', 'booked or not is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { booking, bookingDetail } = req.body;

    //Build Parking slot object
    const parkingslot = {};
    // if (number) {
    //   parkingslot.number = number;
    // }

    parkingslot.booking = booking;

    if (bookingDetail) {
      parkingslot.bookingDetail = bookingDetail;
    }

    //Create a parking slot in PArkignAreaThree
    try {
      let parkingslotcreated = new ParkingAreaThree(parkingslot);
      console.log(booking);
      await parkingslotcreated.save();
      res.json(parkingslotcreated);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

//@route POST api/ParkingArea/bookAreaOne
//@desc  booking of parking area one by the user
//@access private
router.post('/BookAreaOne', auth, async (req, res) => {
  try {
    let parkingAreaOneAvailable = await ParkingAreaOne.findOne({
      booking: 'false'
    });

    const { booking, bookingDetail } = req.body;

    const parkingslot = {};
    parkingslot.user = req.user.id;
    parkingslot.booking = booking;
    parkingslot.bookingDetail = bookingDetail;

    if (parkingAreaOneAvailable) {
      parkingAreaOneAvailable = await ParkingAreaOne.findOneAndUpdate(
        {
          booking: 'false'
        },
        { $set: parkingslot },
        { new: 'true' }
      );

      res.json(parkingAreaOneAvailable);
    } else {
      return res
        .status(400)
        .json({ msg: 'There is no parking slot available' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route DELETE api/ParkingArea/delete
//@desc  deletetion of parking area one slot by the user
//@access private

router.delete('/delete', auth, async (req, res) => {
  try {
    await ParkingAreaOne.findOneAndRemove({ user: req.user.id });

    res.json({ msg: 'Your Reservations removed from our system' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
