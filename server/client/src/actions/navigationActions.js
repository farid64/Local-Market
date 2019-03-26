export const menuSelect = menu => {
  console.log(menu);
  return {
    type: 'menu_select',
    payload: menu
  };
};
