const INTITIAL_STATE = {
  searchTerm: '',
  searchResult: []
};

export default function(state = INTITIAL_STATE, action) {
  switch (action.type) {
    case 'searchTerm_change':
      return { ...state, searchTerm: action.payload };
    case 'get_user':
      return { ...state, searchResult: action.payload };
    default:
      return state;
  }
}
