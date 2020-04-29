import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_USER } from '../../store/types';
import {
  isErrorAction,
  postUserData,
} from '../../store/actions/rootActions';
import {isERROR, sendingStatusSelector} from '../../store/selectors/rootSelectors';

import AlertStatus from '../AlertStatus';
import Preloader from '../Preloader/Preloader';
import FormInput from '../FormInput';
import MyButton from '../Button';

import './AddNewUser.scss';

const AddNewUser = () => {
  const sendingStatus = useSelector(sendingStatusSelector);
  const [name, setName] = useState("");
  const isError = useSelector(isERROR);
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();

  const inputChangeHandler = (e, setHook) => {
    setHook(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !userName || !avatar) {
      dispatch(isErrorAction());
      setTimeout(() => dispatch(isErrorAction())
    , 3000);
      return;
    }
    dispatch(postUserData(name, userName, avatar));
    setTimeout(() => {
      setName("");
      setUserName("");
      setAvatar("");
      dispatch({
        type: CREATE_USER,
      });
    }, 2000);
  };

  return (
    <>
      <div className="user-form">
        {!sendingStatus ? (
          <form>
            <FormInput
              onChange={(event) => inputChangeHandler(event, setName)}
              placeholder="Enter Name"
              value={name}
            />
            <FormInput
              onChange={(event) => inputChangeHandler(event, setUserName)}
              placeholder="Enter UserName"
              value={userName}
            />
            <FormInput
              onChange={(event) => inputChangeHandler(event, setAvatar)}
              placeholder="Paste link for your Avatar"
              value={avatar}
            />
            <MyButton type="submit" onSubmit={submitHandler} />
          </form>
        ) : (
          <Preloader />
        )}
      </div>
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

export default AddNewUser;
