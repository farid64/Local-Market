import axios from 'axios';

export const submitAtm = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_atm', values);
  console.log(res.data);

  history.push('/');
  dispatch({ type: 'search_reset' });
};

export const submitCashIn = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_cash_in', values);
  console.log(res.data);

  history.push('/');
  dispatch({ type: 'search_reset' });
};

export const submitCashOut = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_cash_out', values);
  console.log(res.data);

  history.push('/');
  dispatch({ type: 'search_reset' });
};

export const submitCustomerUpdate = (values, history) => async dispatch => {
  const res = await axios.post('/api/customer_update', values);
  console.log(res.data);

  history.push('/');
  dispatch({ type: 'search_reset' });
};

export const submitMoneyOrder = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_money_order', values);

  history.push('/');
  dispatch({ type: 'search_reset' });
};

export const submitReceiveMoney = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_receive_money', values);

  history.push('/');
  dispatch({ type: 'search_reset' });
};

export const submitEbt = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_ebt', values);

  history.push('/');
  dispatch({ type: 'search_reset' });
};

export const submitBillPay = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_bill_pay', values);

  history.push('/');
  dispatch({ type: 'search_reset' });
};
