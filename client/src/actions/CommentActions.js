import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, COMMENT_ORDER_BY_SOCRE, COMMENT_ORDER_BY_TIMESTAMP, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT } from './types'

export function addComment({id, parentId, author, body, timestamp, voteScore}) {
    return {
        type: ADD_COMMENT,
        id,
        parentId,
        author,
        body,
        timestamp,
        voteScore,
    }
}

export function editComment({id, timestamp, body}) {
    return {
        type: EDIT_COMMENT,
        id,
        timestamp,
        body
    }
}

export function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

export function upVoteComment(id) {
    return {
        type: UP_VOTE_COMMENT,
        id
    }
}

export function downVoteComment(id) {
    return {
        type: DOWN_VOTE_COMMENT,
        id
    }
}

export function commentsOrderByScore() {
    return {
        type: COMMENT_ORDER_BY_SOCRE
    }
}

export function commentsOrderByTimestamp() {
    return {
        type: COMMENT_ORDER_BY_TIMESTAMP
    }
}