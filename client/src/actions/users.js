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

function setUserData(json) {
  return {
    type: t.ADD_INVOICE_USER_DATA_SUCCESS,
    data: json
  };
}

function setUserDataError(error) {
  return {
    type: t.ADD_INVOICE_USER_DATA_FAILURE,
    error
  };
}

export const addInvoiceUserData = (id, data) => (dispatch, getState) => {
  return usersServiceApi
    .patch(id, data)
    .then(json => {
      dispatch(setUserData(json));
    })
    .catch(error => {
      dispatch(setUserDataError(error));
    });
};
