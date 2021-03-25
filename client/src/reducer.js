import * as t from './actionTypes';

const initialState = {
  authentication: [],
  setAuthenticationSuccess: false,
  authenticationFailure: null,
  setAuthenticationFailure: false,

  auth: [],
  getAuthSuccess: false,
  authFailure: null,
  getAuthFailure: false
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        authentication: action.data,
        setAuthenticationSuccess: true,
        setAuthenticationFailure: false
      });
    case t.SET_AUTHENTICATION_FAILURE:
      return Object.assign({}, state, {
        authentication: null,
        setAuthenticationSuccess: false,
        setAuthenticationFailure: true,
        authenticationFailure: action.data
      });

    case t.GET_AUTH_SUCCESS:
      return Object.assign({}, state, {
        auth: action.data,
        getAuthSuccess: true,
        getAuthFailure: false
      });
    case t.GET_AUTH_FAILURE:
      return Object.assign({}, state, {
        auth: null,
        getAuthSuccess: false,
        getAuthFailure: true,
        authFailure: action.data
      });
    default:
      return state;
  }
};
