import axios from 'axios';

export const menuSelect = menu => {
  return {
    type: 'menu_select',
    payload: menu
  };
};
