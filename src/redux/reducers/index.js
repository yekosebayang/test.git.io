import { combineReducers } from 'redux';
import todo from './todo';
import user from './user';

export default combineReducers({
    haha: todo,
    user: user,
});
