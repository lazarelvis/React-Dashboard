import * as t from './actionTypes';

const initialState = {
  authentication: [],
  setAuthenticationSuccess: false,
  authenticationFailure: null,
  setAuthenticationFailure: false,

  auth: [],
  getAuthSuccess: false,
  authFailure: null,
  getAuthFailure: false,

  register: [],
  setRegisterSuccess: false,
  registerFailure: null,
  setRegisterFailure: false,

  email: [],
  sendEmailSuccess: false,
  sendEmailFailure: false,
  emailFailure: null,

  invoiceUserData: [],
  addInvoiceUserDataSuccess: false,
  addInvoiceUserDataFailure: false,
  invoiceUserDataFailure: null,

  addExpense: [],
  addExpenseSuccess: false,
  addExpenseFailure: false,
  setExpenseFailure: null,

  getExpense: [],
  getExpenseSuccess: false,
  getExpenseFailure: false,
  setGetExpenseFailure: null,

  deleteExpense: [],
  deleteExpenseSuccess: false,
  deleteExpenseFailure: false,
  deleteSetExpenseFailure: null
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case t.DELETE_EXPENSE_TRANSACTION_SUCCESS:
      return Object.assign({}, state, {
        deleteExpense: action.data,
        deleteExpenseSuccess: true,
        deleteExpenseFailure: false
      });
    case t.DELETE_EXPENSE_TRANSACTION_FAILURE:
      return Object.assign({}, state, {
        deleteExpense: null,
        deleteExpenseSuccess: false,
        deleteExpenseFailure: true,
        deleteSetExpenseFailure: action.data
      });
    case t.GET_EXPENSE_TRANSACTION_SUCCESS:
      return Object.assign({}, state, {
        getExpense: action.data,
        getExpenseSuccess: true,
        getExpenseFailure: false
      });
    case t.GET_EXPENSE_TRANSACTION_FAILURE:
      return Object.assign({}, state, {
        getExpense: null,
        getExpenseSuccess: false,
        getExpenseFailure: true,
        setGetExpenseFailure: action.data
      });
    case t.ADD_EXPENSE_TRANSACTION_SUCCESS:
      return Object.assign({}, state, {
        addExpense: action.data,
        addExpenseSuccess: true,
        addExpenseFailure: false
      });
    case t.ADD_EXPENSE_TRANSACTION_FAILURE:
      return Object.assign({}, state, {
        addExpense: null,
        addExpenseSuccess: false,
        addExpenseFailure: true,
        setExpenseFailure: action.data
      });
    case t.ADD_INVOICE_USER_DATA_SUCCESS:
      return Object.assign({}, state, {
        invoiceUserData: action.data,
        addInvoiceUserDataSuccess: true,
        addInvoiceUserDataFailure: false
      });
    case t.ADD_INVOICE_USER_DATA_FAILURE:
      return Object.assign({}, state, {
        invoiceUserData: null,
        addInvoiceUserDataSuccess: false,
        addInvoiceUserDataFailure: true,
        invoiceUserDataFailure: action.data
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

    case t.SEND_EMAIL_SUCCESS:
      return Object.assign({}, state, {
        email: action.data,
        sendEmailSuccess: true,
        sendEmailFailure: false
      });
    case t.SEND_EMAIL_FAILURE:
      return Object.assign({}, state, {
        email: null,
        sendEmailSuccess: false,
        sendEmailFailure: true,
        emailFailure: action.data
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

    case t.SET_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        register: action.data,
        setRegisterSuccess: true,
        setRegisterFailure: false
      });
    case t.SET_REGISTER_FAILURE:
      return Object.assign({}, state, {
        register: null,
        setRegisterSuccess: false,
        setRegisterFailure: true,
        registerFailure: action.data
      });
    default:
      return state;
  }
};
