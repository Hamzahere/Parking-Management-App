import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getParkingOne } from '../../actions/parkingone';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

const Dashboard = ({ getParkingOne, parkingarea }) => {
  useEffect(() => {
    getParkingOne();
  }, []);

  const classes = useStyles();
  console.log(parkingarea);

  const parkingOneAreas = parkingarea.map(parking => (
    <tr key={parking._id}>
      <td>{parking._id}</td>

      <td>{parking.booking}</td>

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

  return (
    <div>
      <h4 className='mb-4'>Parking Area One Slots</h4>
      <table className='table'>
        <thead>
          <tr>
            <th>Slot Id</th>
            <th>Booking</th>
          </tr>
          {parkingOneAreas}
        </thead>
      </table>
      <div>AAAA</div>
      <form className={classes.container} noValidate>
        <TextField
          id='date'
          label='Birthday'
          type='date'
          defaultValue='2017-05-24'
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    </div>
  );
};

Dashboard.propTypes = {
  getParkingOne: PropTypes.func.isRequired,
  parkingarea: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  parkingarea: state.parkingone.parkingOne
});

export default connect(mapStateToProps, { getParkingOne })(Dashboard);
