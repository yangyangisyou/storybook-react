import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsers } from '../actions/users';
import { UsersState } from '../config/types';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: UsersState) => state.users);
  useEffect(() => {
    dispatch(requestUsers());
  }, [dispatch]);
  console.log('users in Home: ', users);
  return (
    <div className="App" />
  );
};

export default Home;
