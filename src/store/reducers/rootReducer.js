import {
  CREATE_TWEET,
  CREATE_USER,
  GET_TWEETS,
  GET_USERS,
  UPDATE_MENU_ITEM, UPDATE_THEME_MOD,
} from '../types';

const initialState = {
  menuItem: "Users",
  users: [],
  tweets: [],
  sendingStatus: false,
  isSwitchOn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_THEME_MOD: {
      return {
        ...state, isSwitchOn: !state.isSwitchOn,
      }
    }
    case UPDATE_MENU_ITEM: {
      return {
        ...state,
        menuItem: action.payload,
      };
    }
    case GET_USERS: {
      return {
        ...state,
        users: action.payload.reverse(),
      };
    }
    case CREATE_USER: {
      return {
        ...state,
        sendingStatus: !state.sendingStatus,
      };
    }
    case GET_TWEETS: {
      return {
        ...state,
        tweets: action.payload.reverse(),
      };
    }
    case CREATE_TWEET: {
      return {
        ...state,
        sendingStatus: !state.sendingStatus,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
