import React, { useContext } from 'react';
import { Context } from './Context';
import { removeExpense } from '../../../actions/expenses';
import { connect } from 'react-redux';

const Transaction = ({ transaction, removeExpense }) => {
  // const { deleteTransaction } = useContext(Context);
  // console.log(transaction._id);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.description}
      <span>
        {sign}Lei {Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => removeExpense(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

const mapStateToProps = state => {
  return {
    deleteExpense: state.deleteExpense
  };
};

const mapDispatchToProps = dispatch => ({
  removeExpense: id => {
    dispatch(removeExpense(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
