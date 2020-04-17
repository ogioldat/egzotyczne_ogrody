import { TOGGLE_MENU } from 'redux/actions/menuActions';

const initialState = {
  showMenu: false,
};

export const menu = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state
    }

    case TOGGLE_MENU: {
      return {
        showMenu: !state.showMenu
      }
    }
  }
};

export const getShowMenu = state => state.menu.showMenu;