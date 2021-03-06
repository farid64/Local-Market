import axios from 'axios';

export const submitAtm = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_atm', values);
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
  console.log(res.data);

  history.push('/');
  dispatch({ type: 'search_reset' });
};

export const submitReceiveMoney = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_receive_money', values);
  console.log(res.data);

  history.push('/');
  dispatch({ type: 'search_reset' });
};

export const submitEbt = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_ebt', values);
  console.log(res.data);

  history.push('/');
  dispatch({ type: 'search_reset' });
};
