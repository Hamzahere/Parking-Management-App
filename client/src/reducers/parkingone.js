import { GET_PARKING, CLEAR_PARKING } from '../actions/types';

const initialState = {
  parkingOne: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    //   case PROFILE_LOADING:
    //     return {
    //       ...state,
    //       loading: true
    //     };
    case GET_PARKING:
      return {
        ...state,
        // booking: action.payload.booking,
        // bookingDetail: action.payload.bookingDetail,
        // user: action.payload.user
        parkingOne: payload
      };
    case CLEAR_PARKING:
      return {
        ...state,
        parkingOne: payload
      };
    default:
      return state;
  }
}
