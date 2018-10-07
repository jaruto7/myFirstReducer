import uuid from uuid;

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE COMMENT';
export const SET_COMMENT_VOTES = 'SET_COMMENT_VOTES';

function createComment( text ) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment( id ) {
    return {
        type: EDIT_COMMENT,
        text: 'Wyedytowany tekst komentarza',
        id
    }
}

function deleteComment( id ) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

function thumbUpComment( votes, id ) {
    return {
        type: SET_COMMENT_VOTES,
        id,
        votes: votes++
    }
}

function thumbDownComment( votes, id ) {
    return {
        type: SET_COMMENT_VOTES,
        id,
        votes: votes--
    }
}