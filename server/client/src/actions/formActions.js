import axios from 'axios';

export const submitAtm = (values, history) => async dispatch => {
  const res = await axios.post('/api/transactions_atm', values);
  console.log(res.data);

  history.push('/');
  dispatch({ type: 'search_reset' });
};
