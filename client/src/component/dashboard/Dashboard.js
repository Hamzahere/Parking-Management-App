import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getParkingOne } from '../../actions/parkingone';

const Dashboard = ({ getParkingOne, parkingarea }) => {
  useEffect(() => {
    getParkingOne();
  }, []);

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
