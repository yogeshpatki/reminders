import { USER_LOGIN, USER_LOGOUT, USER_DATA_LOADED } from './types';

export const userLogin = user => (dispatch) => {
  dispatch({
    type: USER_LOGIN,
    payload: user
  });
};

export const userLogout = () => {
  return {type: USER_LOGOUT};
};

export const loadUserData = data => {
  return {
    type: USER_DATA_LOADED,
    payload: {userData: data}
  };
};

