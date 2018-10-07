import { CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT, SET_COMMENT_VOTES } from './actions';

function comments( state = [], action ) {
    switch( action.type ) {
        case CREATE_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state.comments ];
    }
}