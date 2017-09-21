import { ADD_POST, EDIT_POST, DELETE_POST, POST_ORDER_BY_SCORE, POST_ORDER_BY_TIMESTAMP, UP_VOTE_POST, DOWN_VOTE_POST } from './types'

export function postsOrderByScore() {
    return {
        type: POST_ORDER_BY_SCORE
    }
}

export function postsOrderByTimestamp() {
    return {
        type: POST_ORDER_BY_TIMESTAMP
    }
}

export function addPost({id, timestamp, title, body, author, category, voteScore, deleted}) {
    return {
        type: ADD_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore,
        deleted,
    }
}

export function editPost({id, title, body}) {
    return {
        type: EDIT_POST,
        id,
        title,
        body
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        id
    }
}

export function upVotePost(id) {
    return {
        type: UP_VOTE_POST,
        id
    }
}

export function downVotePost(id) {
    return {
        type: DOWN_VOTE_POST,
        id
    }
}

