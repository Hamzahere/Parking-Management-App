import {
  GET_PARKING,
  CLEAR_PARKING,
  BOOK_PARKING,
  UNABLE_TO_BOOK
} from '../actions/types';

const initialState = {
  parkingOne: [],
  bookedSlot: ''
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
    case BOOK_PARKING:
      return {
        ...state,
        bookedSlot: payload
      };

    case UNABLE_TO_BOOK:
      return {
        ...state,
        bookedSlot: payload
      };
    default:
      return state;
  }
}
