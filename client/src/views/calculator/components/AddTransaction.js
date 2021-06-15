import React, { useState, useContext } from 'react';
import { Context } from './Context';
import { v4 as uuid } from 'uuid';
import Select from 'react-select';

import { addExpenseData } from '../../../actions/expenses';
import { connect } from 'react-redux';
import { options } from './data';

const AddTransaction = ({ addExpense }) => {
  const { addTransaction } = useContext(Context);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  console.log('description: ', description);
  const OnSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      createdAt: new Date(),
      description: description.label,
      category: description.category,
      amount: +amount
    };
    console.log('newTransaction', newTransaction);
    addExpense(newTransaction);
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
            <Select
              value={description}
              onChange={setDescription}
              options={options}
            />
            {/* <input
              className="input-text"
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter text..."
            />  */}
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

const mapStateToProps = state => {
  return {
    addExpense: state.addExpense
  };
};

const mapDispatchToProps = dispatch => ({
  addExpense: data => {
    dispatch(addExpenseData(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
