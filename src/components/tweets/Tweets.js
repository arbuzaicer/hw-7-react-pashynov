import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTweetsAction,
} from '../../store/actions/rootActions';
import { tweetsSelector } from '../../store/selectors/rootSelectors';

import UsersPosts from '../singlePost';
import Preloader from '../Preloader/Preloader';

const Tweets = () => {
  const tweets = useSelector(tweetsSelector);
  const dispatch = useDispatch();

  const tweetsData = tweets.map((user) => {
    return (
      <UsersPosts
        key={user.id}
        avatar="https://cdn4.iconfinder.com/data/icons/super-hero/154/super-hero-soldier-star-wars-droid-head-512.png"
        userName="UserName"
        name="Name"
        imgContent={user.image}
        textContent={user.content}
      />
    );
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(getTweetsAction());
    }, 3000);
  }, [dispatch]);
  return tweets.length ? <div>{tweetsData}</div> : <Preloader />;
};

export default Tweets;
