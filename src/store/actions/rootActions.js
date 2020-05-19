import {
  CREATE_TWEET,
  CREATE_USER,
  GET_TWEETS,
  GET_USERS,
  IS_ERROR,
  UPDATE_MENU_ITEM,
  UPDATE_THEME_MOD,
} from '../types';
import api from '../../api/api';

export const menuNameAction = (data) => {
  let result = data.slice(1).split("-");
  if (result.length > 1) {
    result = result
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join("");
  }
  else {
    result = result.join("");
    result = !result ? 'Users' : result[0].toUpperCase()+result.slice(1);
  }

  return {
    type: UPDATE_MENU_ITEM,
    payload: result,
  };
};

export const switchAction = () => {
  return {
    type: UPDATE_THEME_MOD,
  };
};

export const getUsersDataAction = () => (dispatch) => {
  api.getUsers().then((res) => {
    dispatch({
      type: GET_USERS,
      payload: res.data.data,
    });
  });
};

export const postUserData = (name, username, avatar) => (dispatch) => {
  api
    .createUser(name, username, avatar)
    .then(() => {
      dispatch({
        type: CREATE_USER,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(isErrorAction());
      setTimeout(() => dispatch(isErrorAction()), 2500);
    });
};

export const getTweetsAction = () => (dispatch) => {
  api.getTweets().then((res) => {
    dispatch({
      type: GET_TWEETS,
      payload: res.data.data,
    });
  });
};

export const isErrorAction = () => {
  return {
    type: IS_ERROR,
  };
};

export const postTweetData = (userId, content, image) => (dispatch) => {
  api
    .createTweet(userId, content, image)
    .then(() => {
      dispatch({
        type: CREATE_TWEET,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(isErrorAction());
      setTimeout(() => dispatch(isErrorAction()), 2500);
    });
};
