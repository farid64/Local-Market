import axios from 'axios';

export const getUser = info => async dispatch => {
  const res = await axios.post('/api/users', { info });
  // console.log(res.data[0].firstName + ' aslan + ' + info);
  dispatch({ type: 'get_user', payload: res.data });
};

export const searchTermChange = term => {
  return {
    type: 'searchTerm_change',
    payload: term
  };
};

export const customerSelect = customer => async dispatch => {
  console.log(customer);
  const res = await axios.get(`/api/${customer}`);
  dispatch({
    type: 'customer_select',
    payload: res.data
  });
};
