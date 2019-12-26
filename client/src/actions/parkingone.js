import axios from 'axios';

import { GET_PARKING, CLEAR_PARKING } from './types';

// Get current profile
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

// // Create Profile
// export const createProfile = (profileData, history) => dispatch => {
//   axios
//     .post('/api/profile', profileData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

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
