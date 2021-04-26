import * as t from '../actionTypes';
import usersServiceApi from '../services/users';

//get users
function sendUser(json) {
  return {
    type: t.SET_REGISTER_SUCCESS,
    data: json
  };
}

function sendUserError(error) {
  return {
    type: t.SET_REGISTER_FAILURE,
    error
  };
}

export const registerUser = data => (dispatch, getState) => {
  return usersServiceApi
    .create(data)
    .then(json => {
      dispatch(sendUser(json));
    })
    .catch(error => {
      dispatch(sendUserError(error));
    });
};
