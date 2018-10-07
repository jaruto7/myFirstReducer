import { CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT, SET_COMMENT_VOTES } from './actions';

const initialState = {
    comments: [],
    users: []
};

function reducer( state = initialState, action ) {
    switch( action.type ) {
        case CREATE_COMMENT:
            return Object.assign( {}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                , ...state ]
            })
        case DELETE_COMMENT:
            return Object.assign( {}, state, {
               comments: state.comments.filter( comment => comment.id !== action.id ) 
            })
        case EDIT_COMMENT:
            return Object.assign( {}, state, {
                comments: state.comments.filter( comment => comment.id !== action.id ) 
            })
        case SET_COMMENT_VOTES:
            return Object.assign( {}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                , ...state ]
            })            
            default:
                return state;
    }
}

