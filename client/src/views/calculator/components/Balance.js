import React, { useContext } from 'react';
import { Context } from './Context';
import { useSelector } from 'react-redux';

export const Balance = () => {
  // const { transactions } = useContext(Context);
  const transactions = useSelector(state => state.getExpense);

  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="total-balance">
      <h4>Your Balance</h4>
      <h1>Lei {total}</h1>
    </div>
  );
};
