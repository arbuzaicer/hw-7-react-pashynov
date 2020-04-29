import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_TWEET } from '../../store/types';
import {
  isERROR,
  sendingStatusSelector,
  tweetsSelector,
} from '../../store/selectors/rootSelectors';
import {
  getTweetsAction, isErrorAction,
  postTweetData,
} from '../../store/actions/rootActions';

import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import Preloader from '../Preloader/Preloader';
import AlertStatus from '../AlertStatus';
import MyButton from '../Button';

import './addNewTweet.scss';

const AddNewTweet = () => {
  const [user, setUser] = useState("");
  const isError = useSelector(isERROR);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const sendingStatus = useSelector(sendingStatusSelector);

  const options = Array.from(
    new Set(useSelector(tweetsSelector).map((option) => option.userId))
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTweetsAction());
  }, [dispatch]);

  const inputChangeHandler = (e, setHook) => {
    setHook(e.target.value);
  };
  const selectUserHandler = (event) => {
    setUser(event.target.value);
  };
  const onuSubmitTweetForm = (e) => {
    e.preventDefault();
    if (!user || !content || !image) {
      dispatch(isErrorAction());
      setTimeout(() => dispatch(isErrorAction()), 3000);
      return;
    }
    dispatch(postTweetData(user, content, image));
    setTimeout(() => {
      setUser("");
      setContent("");
      setImage("");
      dispatch({
        type: CREATE_TWEET,
      });
    }, 2000);
  };

  return (
    <>
      {!sendingStatus ? (
        <div className="add-tweet">
          <FormInput
            onChange={(event) => inputChangeHandler(event, setContent)}
            value={content}
            placeholder="Enter content..."
          />
          <FormInput
            onChange={(event) => inputChangeHandler(event, setImage)}
            value={image}
            placeholder="Paste img URL..."
          />
          <FormSelect
            options={options}
            value={user}
            handleChange={selectUserHandler}
          />
          <MyButton type="submit" onSubmit={onuSubmitTweetForm} />
        </div>
      ) : (
        <Preloader />
      )}
      {sendingStatus && (
        <div className="alert-status">
          <AlertStatus type="success" />
        </div>
      )}
      {isError && (
        <div className="alert-status">
          <AlertStatus type="fail" />
        </div>
      )}
    </>
  );
};

export default AddNewTweet;
