import * as t from '../actionTypes';
import authenticationServiceApi from '../services/authentication';

//get users
function receiveAuthentication(json) {
  return {
    type: t.SET_AUTHENTICATION_SUCCESS,
    data: json
  };
}

function receiveAuthenticationError(error) {
  return {
    type: t.SET_AUTHENTICATION_FAILURE,
    error
  };
}

export const fetchAuthenticationUser = data => (dispatch, getState) => {
  return authenticationServiceApi
    .create(data)
    .then(json => {
      dispatch(receiveAuthentication(json));
    })
    .catch(error => {
      dispatch(receiveAuthenticationError(error));
    });
};
