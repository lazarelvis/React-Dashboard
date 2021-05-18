import * as t from '../actionTypes';
import emailServiceApi from '../services/email';
//get users
function sendEmailSuccess(json) {
  return {
    type: t.SEND_EMAIL_SUCCESS,
    data: json
  };
}

function sendEmailError(error) {
  return {
    type: t.SEND_EMAIL_FAILURE,
    error
  };
}

export const sendEmail = data => (dispatch, getState) => {
  return emailServiceApi
    .create(data)
    .then(json => {
      dispatch(sendEmailSuccess(json));
    })
    .catch(error => {
      dispatch(sendEmailError(error));
    });
};
