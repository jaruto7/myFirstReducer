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

function editComment( id, text ) {
    return {
        type: EDIT_COMMENT,
        text: text,
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

function thumbUpComment( id ) {
    return {
        type: SET_COMMENT_VOTES_UP,
        id
    }
}
const boundThumbUpComment = function( votes, id ) {
    dispatch(thumbUpComment( votes, id ));
}

function thumbDownComment( id ) {
    return {
        type: SET_COMMENT_VOTES_DOWN,
        id
    }
}
const boundThumbDownComment = function( votes, id ) {
    dispatch(thumbDownComment( votes, id ));
}