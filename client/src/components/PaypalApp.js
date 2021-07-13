import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const initialOptions = {
  'client-id':
    'AfQ52gBfkrz1iClr8dYCn7VavkUe9ygmHTmiMaDXYEQCBW80pdzNbZhZae2j3Q8GoIj9tvsVF1Ipf-W9',
  currency: 'USD'
};

export default function PaypalApp({
  toPay,
  details,
  addHistoryUserData,
  userData
}) {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: toPay
          }
        }
      ]
    });
  };

  const onApprove = (data, actions) => {
    details.status = 'paid';
    details.paypal = data;
    const historyObj = { history: details };
    const dataObj = {
      data: userData.data
    };
    addHistoryUserData(userData._id, historyObj);
    addHistoryUserData(userData._id, dataObj);

    return actions.order.capture();
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ layout: 'horizontal' }}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </PayPalScriptProvider>
  );
}
