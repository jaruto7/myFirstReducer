import { combineReducers } from 'redux';
import comments from './comments';

const app = combineReducers({
    comments
});

const initialState = {
    comments: [],
    users: []
};

function comments( state = [], action ) {
    switch( action.type ) {
        case CREATE_COMMENT:
            return [{
                comments:
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
            }];

        case EDIT_COMMENT:
            return state.map( comment => {
                if( comment.id === action.id ) {
                    comment.text = action.text
                }
                return comment;
            });
            
        case DELETE_COMMENT:
        return (state, {
               comments: state.comments.filter( app )
            });
            
        case SET_COMMENT_VOTES_UP:
            return state.map(comment => {
                if( comment.id == action.id ) {
                    comment.votes = comment.votes + 1;
                }
                return comment;
            });
        
        case SET_COMMENT_VOTES_DOWN:
            return state.map( comment => {
                if( comment.id == action.id ) {
                    comment.votes = comment.votes - 1;
                }
                return comment;
            });    
    }
};

export default comments;
