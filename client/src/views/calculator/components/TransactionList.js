import React, { useContext, useEffect } from 'react';
import { Context } from './Context';
import Transaction from './Transaction';
import { getExpenseFetch } from '../../../actions/expenses';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const TransactionList = ({ getExpenseData, getExpense }) => {
  const { transactions } = useContext(Context);
  const addExpense = useSelector(state => state.addExpense);
  const deleteExpense = useSelector(state => state.deleteExpense);

  useEffect(() => {
    getExpenseData();
  }, [addExpense, deleteExpense]);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {getExpense.map(transaction => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    getExpense: state.getExpense
  };
};

const mapDispatchToProps = dispatch => ({
  getExpenseData: () => {
    dispatch(getExpenseFetch());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
