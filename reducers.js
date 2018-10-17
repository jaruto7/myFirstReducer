import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';
// import { CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT, SET_COMMENT_VOTES } from './actions';

const app = combineReducers({
    comments,
    users
});
