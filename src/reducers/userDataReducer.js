import { USER_DATA_LOADED } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case USER_DATA_LOADED:
      console.log(action);
      return action.payload.userData;
    default:
      return null;
  }
}
