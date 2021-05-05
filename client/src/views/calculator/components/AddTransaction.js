import React, { useState, useContext } from 'react';
import { Context } from './Context';

export const AddTransaction = () => {
  const { addTransaction } = useContext(Context);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const OnSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: new Date(),
      description,
      amount: +amount
    };

    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={OnSubmit}>
        <div className="form-container">
          <div className="form-control">
            <label htmlFor="text">
              <b>Text</b>
            </label>
            <input
              className="input-text"
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter text..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              <b>Amount (negative - expense, positive - income)</b>
            </label>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
