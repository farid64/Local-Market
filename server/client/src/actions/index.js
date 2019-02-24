import axios from 'axios';

export const getUser = info => async dispatch => {
  const res = await axios.post('/api/userInfo', { info });
  // console.log(res.data[0].firstName + ' aslan + ' + info);
  dispatch({ type: 'get_user', payload: res.data });
};

export const searchTermChange = term => {
  return {
    type: 'searchTerm_change',
    payload: term
  };
};
