import { CREATE_TWEET, CREATE_USER, GET_TWEETS, GET_USERS, UPDATE_MENU_ITEM, UPDATE_THEME_MOD } from '../types';
import api from '../../api/api';

export const menuNameAction = (data) => {
  return {
    type: UPDATE_MENU_ITEM,
    payload: data,
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
  api.createUser(name, username, avatar).then(() => {
    dispatch({
      type: CREATE_USER,
    });
  });
};

export const getTweetsAction = () => dispatch => {
  api.getTweets().then(res => {
    dispatch({
      type: GET_TWEETS,
      payload: res.data.data
    })
  })
};

export const postTweetData = (userId, content, image) => (dispatch) => {
  api.createTweet(userId, content, image).then(()=> {
    dispatch({
      type: CREATE_TWEET,
    });
  })
};
