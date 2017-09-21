export const POST_ORDER_BY_SCORE = 'POST_ORDER_BY_SCORE'
export const POST_ORDER_BY_TIMESTAMP = 'POST_ORDER_BY_TIMESTAMP'

export const COMMENT_ORDER_BY_SOCRE = 'COMMENT_ORDER_BY_SCORE'
export const COMMENT_ORDER_BY_TIMESTAMP = 'COMMENT_ORDER_BY_TIMESTAMP'

export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'

export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'

export const ADD_CATEGORY = 'ADD_CATEGORY'

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

export function addCategory({name, path}) {
    return {
        type: ADD_CATEGORY,
        name,
        path
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