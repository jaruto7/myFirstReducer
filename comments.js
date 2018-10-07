import { CREATE_COMMENT } from './actions';

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