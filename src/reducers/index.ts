import { combineReducers } from 'redux';
import users from './users';

const rootReducers = combineReducers({
  users,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
