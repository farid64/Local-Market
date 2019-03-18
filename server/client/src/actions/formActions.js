import axios from 'axios';

export const submitAtm = (values, history) => async dispatch => {
  // const res = await axios.post('/api/atm', values);
  console.log(values);

  history.push('/');
  dispatch({ type: 'search_reset' });
};
