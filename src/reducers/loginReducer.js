import { USER_LOGIN, USER_LOGOUT } from '../actions/types';

const initialState = {
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
}
