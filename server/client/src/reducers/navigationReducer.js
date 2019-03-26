const INITIAL_STATE = {
  menuSelected: {
    menu: 'main menu',
    route: '/'
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'menu_select':
      return { ...state, menuSelected: action.payload };
    default:
      return state;
  }
}
