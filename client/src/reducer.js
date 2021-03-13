import * as t from './actionTypes';

const initialState = {
  users: [],
  getUsersSuccess: false,
  usersFailure: null,
  getUsersFailure: false,

  authentication: [],
  setAuthenticationSuccess: false,
  authenticationFailure: null,
  setAuthenticationFailure: false
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case t.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.data,
        getUsersSuccess: true,
        getUsersFailure: false
      });
    case t.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        users: null,
        getUsersSuccess: false,
        getUsersFailure: true,
        usersFailure: action.data
      });

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
    default:
      return state;
  }
};
