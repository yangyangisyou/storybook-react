import {
  GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED, UserActionTypes
} from '../config/types';

export const requestUsers = (): UserActionTypes => ({
  type: GET_USERS_REQUEST,
});

export const storeUsers = (users: any[]): UserActionTypes => ({
  type: GET_USERS_SUCCESS,
  users: users,
});

export const failedUsers = (): UserActionTypes => ({
  type: GET_USERS_FAILED,
  message: 'error',
});
