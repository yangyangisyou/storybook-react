export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

interface RequestUserAction {
    type: typeof GET_USERS_REQUEST,
}

interface StoreUserAction {
    type: typeof GET_USERS_SUCCESS,
    users: any[],
}

interface FailedUserAction {
    type: typeof GET_USERS_FAILED,
    message: string,
}

export interface UsersState {
    users: any [],
    loading: boolean,
    error: string | null,
}

export type UserActionTypes =
  | RequestUserAction | StoreUserAction | FailedUserAction;
