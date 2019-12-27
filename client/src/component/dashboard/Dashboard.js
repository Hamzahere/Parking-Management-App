import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getParkingOne, BookParking } from '../../actions/parkingone';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const Dashboard = ({ getParkingOne, parkingarea, BookParking, bookedSlot }) => {
  useEffect(() => {
    getParkingOne();
  }, []);

  const [formData, setFormData] = useState({
    bookingDate: ''
  });

  const onChange = e => {
    setFormData({ ...formData, bookingDate: e.target.value });
    console.log(formData);
  };

  const classes = useStyles();
  console.log(parkingarea);

  // const data = {
  //   ad: parking.booking
  // };
  const parkingOneAreas = parkingarea.map(parking => (
    <tr key={parking._id}>
      <td>{parking._id}</td>

      <td>{parking.booking}</td>

      <td>
        <Button
          variant='contained'
          onClick={() =>
            BookParking(parking._id, parking.booking, formData.bookingDate)
          }
          color='primary'
        >
          Primary
        </Button>
      </td>

      {/* <td>
        <button
          onClick={this.onDeleteClick.bind(this, parking._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td> */}
    </tr>
  ));

  // const FinalizeData = (id, booking, detail) => {
  //   <table>
  //     <tr>
  //       <td></td>
  //     </tr>
  //   </table>;
  // };

  return (
    <Fragment>
      <h4 className='mb-4'>Parking Area One Slots</h4>
      <table className='table'>
        <thead>
          <tr>
            <th>Slot Id</th>
            <th>Booking</th>
            <th></th>
          </tr>
          {parkingOneAreas}
        </thead>
      </table>
      <div>AAAA</div>
      <form className={classes.container} noValidate>
        <TextField
          id='date'
          label='Slot Time'
          type='date'
          defaultValue='2019-12-31'
          className={classes.textField}
          onChange={e => onChange(e)}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getParkingOne: PropTypes.func.isRequired,
  parkingarea: PropTypes.array.isRequired,
  bookedSlot: PropTypes.object.isRequired,
  BookParking: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  parkingarea: state.parkingone.parkingOne,
  bookedSlot: state.parkingone.bookedSlot
});

export default connect(mapStateToProps, { getParkingOne, BookParking })(
  Dashboard
);
