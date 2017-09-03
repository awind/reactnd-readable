// export const ORDER_BY_SCORE = 'ORDER_BY_SCORE'
// export const ORDER_BY_TIMESTAMP = 'ORDER_BY_TIMESTAMP'

export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

// export const ADD_COMMENT = 'ADD_COMMENT'
// export const EDIT_COMMENT = 'EDIT_COMMENT'
// export const DELETE_COMMENT = 'DELETE_COMMENT'

// export function orderByScore() {
//     return {
//         type: ORDER_BY_SCORE,
//     }
// }

// export function orderByTimestamp() {
//     return {
//         type: ORDER_BY_TIMESTAMP
//     }
// }

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

// export function addComment({id, timestamp, body, owner, parentId}) {
//     return {
//         type: ADD_COMMENT,
//         id,
//         timestamp,
//         body,
//         owner,
//         parentId
//     }
// }

// export function editComment({id, timestamp, body}) {
//     return {
//         type: EDIT_COMMENT,
//         id,
//         timestamp,
//         body
//     }
// }

// export function deleteComment(id) {
//     return {
//         type: DELETE_COMMENT,
//         id
//     }
// }

