import * as t from '../actionTypes';
import expenseServiceApi from '../services/expenses';

function getExpenseData(json) {
  return {
    type: t.GET_EXPENSE_TRANSACTION_SUCCESS,
    data: json
  };
}

function getExpenseDataError(error) {
  return {
    type: t.GET_EXPENSE_TRANSACTION_FAILURE,
    error
  };
}

export const getExpenseFetch = () => (dispatch, getState) => {
  return expenseServiceApi
    .fetchAll()
    .then(json => {
      dispatch(getExpenseData(json));
    })
    .catch(error => {
      dispatch(getExpenseDataError(error));
    });
};

function setExpenseData(json) {
  return {
    type: t.ADD_EXPENSE_TRANSACTION_SUCCESS,
    data: json
  };
}

function setExpenseDataError(error) {
  return {
    type: t.ADD_EXPENSE_TRANSACTION_FAILURE,
    error
  };
}

export const addExpenseData = data => (dispatch, getState) => {
  return expenseServiceApi
    .create(data)
    .then(json => {
      dispatch(setExpenseData(json));
    })
    .catch(error => {
      dispatch(setExpenseDataError(error));
    });
};

function removeExpenseData(json) {
  return {
    type: t.DELETE_EXPENSE_TRANSACTION_SUCCESS,
    data: json
  };
}

function removeExpenseDataError(error) {
  return {
    type: t.DELETE_EXPENSE_TRANSACTION_FAILURE,
    error
  };
}

export const removeExpense = id => (dispatch, getState) => {
  return expenseServiceApi
    .remove(id)
    .then(json => {
      dispatch(removeExpenseData(json));
    })
    .catch(error => {
      dispatch(removeExpenseDataError(error));
    });
};
