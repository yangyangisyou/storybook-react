import {
  UserActionTypes, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED, UsersState
} from '../config/types';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: UserActionTypes): UsersState => {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_USERS_SUCCESS: {
      console.log('action ', action);

      return {
        ...state,
        loading: false,
        users: action.users,
      };
    }
    case GET_USERS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
