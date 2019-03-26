import axios from 'axios';

export const searchReset = () => {
  return {
    type: 'search_reset'
  };
};

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

export const customerSelect = (
  customerId,
  history,
  route
) => async dispatch => {
  const res = await axios.get(`/api/${customerId}`);

  history.push(route);
  dispatch({
    type: 'customer_select',
    payload: res.data
  });
};
