import React from 'react';
import {
  ArtTrack,
  PersonAdd,
  PostAdd,
  SupervisorAccount,
} from '@material-ui/icons';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';

import Tweets from './components/tweets';
import AddNewTweet from './components/addNewTweet';
import Users from './components/users';
import AddNewUser from './components/addNewUser';

export default [
  {
    path: "/",
    component: Users,
    exact: true,
    routeTitle: "Users",
    routeIcon: (
      <ListItemIcon>
        <SupervisorAccount fontSize="small" />
      </ListItemIcon>
    ),
  },
  {
    path: "/new-user",
    component: AddNewUser,
    exact: true,
    routeTitle: "Add new User",
    routeIcon: (
      <ListItemIcon>
        <PersonAdd fontSize="small" />
      </ListItemIcon>
    ),
  },
  {
    path: "/tweets",
    component: Tweets,
    exact: true,
    routeTitle: "Tweets",
    routeIcon: (
      <ListItemIcon>
        <ArtTrack fontSize="small" />
      </ListItemIcon>
    ),
  },
  {
    path: "/new-tweet",
    component: AddNewTweet,
    exact: true,
    routeTitle: "Add new Tweet",
    routeIcon: (
      <ListItemIcon>
        <PostAdd fontSize="small" />
      </ListItemIcon>
    ),
  },
];
