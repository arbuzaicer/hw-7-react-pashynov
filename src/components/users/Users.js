import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { usersSelector } from '../../store/selectors/rootSelectors';
import { getUsersDataAction } from '../../store/actions/rootActions';

import Preloader from '../Preloader/Preloader';
import SingleUser from '../singleUser';
import PaginationSection from '../Pagination';

import './Users.scss';

const Users = () => {
  const [currentUsersPage, setCurrentUsersPage] = useState(0);
  const usersStore = useSelector(usersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(getUsersDataAction()), 2000);
  }, [dispatch]);

  // Pagination section

  const usersPerPage = 4;
  const paginationCount = Math.ceil(usersStore.length / usersPerPage);
  const onPaginationChange = (e, value) => {
    setCurrentUsersPage(value - 1); //-1, because pagination count start with 1, and my array starting with 0
  };
  const displayedUsers = _.chunk(usersStore, usersPerPage)[currentUsersPage] || [];
  const users = displayedUsers.map((user) => {
    return (
      <SingleUser
        key={user.id}
        avatar={user.avatar}
        username={user.username}
        name={user.name}
      />
    );
  });

  return usersStore.length ? (
    <>
      <div className="users-section">{users}</div>
      <PaginationSection
        count={paginationCount}
        onPaginationChange={onPaginationChange}
      />
    </>
  ) : (
    <Preloader />
  );
};

export default Users;
