import axios from 'axios';

import {
  GET_PARKING,
  CLEAR_PARKING,
  BOOK_PARKING,
  UNABLE_TO_BOOK
} from './types';

// Get parking area one slots
export const getParkingOne = () => dispatch => {
  // dispatch(setProfileLoading());
  axios
    .get('api/ParkingArea/viewParkingAreaOne')
    .then(res =>
      dispatch({
        type: GET_PARKING,
        payload: res.data
      })
    )
    .catch(err => {
      console.log('eerrrr');
      dispatch({
        type: GET_PARKING,
        payload: {}
      });
    });
};

// Create Booking for user
// export const createProfile = (profileData, history) => dispatch => {
//   axios
//     .post('/api/profile', profileData)
//     .then((res) => {history.push('/dashboard')

//     dispatch({
//       type: BOOK_PARKING,
//       payload: res.data
//     })
//   })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

export const BookParking = (id, booking, bookingDetail) => async dispatch => {
  const data = {
    booking,
    bookingDetail,
    id
  };
  const body = JSON.stringify({ booking, bookingDetail, id });
  const config = {
    headers: {
      'Content-Type ': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/ParkingArea/bookAreaOne', body, config);

    dispatch({
      type: BOOK_PARKING,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: UNABLE_TO_BOOK,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// // Profile loading
// export const setProfileLoading = () => {
//   return {
//     type: PROFILE_LOADING
//   };
// };

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_PARKING
  };
};
