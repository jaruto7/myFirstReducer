import uuid from uuid;

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE COMMENT';
export const SET_COMMENT_VOTES_UP = 'SET_COMMENT_VOTES_UP';
export const SET_COMMENT_VOTES_DOWN = 'SET_COMMENT_VOTES_DOWN';

function createComment( text ) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}
const boundCreateComment = function( text ) {
    dispatch(createComment( text ));
} 

function editComment( id ) {
    return {
        type: EDIT_COMMENT,
        text: 'Wyedytowany tekst komentarza',
        id
    }
}
const boundEditComment = function( id ) {
    dispatch(editComment( id ));
} 

function deleteComment( id ) {
    return {
        type: DELETE_COMMENT,
        id
    }
}
const boundDeleteComment = function( id ) {
    dispatch(deleteComment( id ));
}

function thumbUpComment( votes, id ) {
    return {
        type: SET_COMMENT_VOTES_UP,
        id,
        votes
    }
}
const boundThumbUpComment = function( votes, id ) {
    dispatch(thumbUpComment( votes, id ));
}

function thumbDownComment( votes, id ) {
    return {
        type: SET_COMMENT_VOTES_DOWN,
        id,
        votes
    }
}
const boundThumbDownComment = function( votes, id ) {
    dispatch(thumbDownComment( votes, id ));
}