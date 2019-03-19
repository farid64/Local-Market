const INTITIAL_STATE = {
  searchTerm: '',
  searchResult: [],
  menuSelected: 'not empty',
  customerSelected: {
    firstname: 'Ali',
    lastname: 'Hosseini',
    birthday: '6.15.1990'
  }
};

export default function(state = INTITIAL_STATE, action) {
  switch (action.type) {
    case 'searchTerm_change':
      return { ...state, searchTerm: action.payload };
    case 'get_user':
      return { ...state, searchResult: action.payload };
    case 'menu_select':
      return { ...state, menuSelected: action.payload };
    case 'customer_select':
      return { ...state, customerSelected: action.payload };
    case 'search_reset':
      return { INTITIAL_STATE };
    default:
      return state;
  }
};
