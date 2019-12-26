import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import parkingone from './parkingone';

export default combineReducers({
  alert,
  auth,
  parkingone
});
