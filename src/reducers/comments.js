import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, COMMENT_ORDER_BY_SOCRE, COMMENT_ORDER_BY_TIMESTAMP, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT } from '../actions'

function comments(state = [], action) {
    const { id, parentId, author, body, timestamp, voteScore} = action
    switch(action.type) {
        case ADD_COMMENT:
        const filterComments = state.filter((item) => {
            return item.id === id
        })
        // filter duplicate
        if (filterComments.length > 0) {
            return state
        }
            return [
                ...state, {
                    id,
                    parentId,
                    author,
                    body,
                    timestamp,
                    voteScore,
                }
            ]
        case EDIT_COMMENT:
            return state.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        timestamp,
                        body
                    }
                }
                return item
            })
        case DELETE_COMMENT:
            return state.filter((item) => {
                return item.id !== id
            })
        case UP_VOTE_COMMENT:
            return state.map((item) => {
                if(item.id === id) {
                    return {
                        ...item, 
                        voteScore: parseInt(item.voteScore) + 1
                    }
                }
                return item
            })
        case DOWN_VOTE_COMMENT:
            return state.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        voteScore: parseInt(item.voteScore) - 1
                    }
                }
                return item
            })
        case COMMENT_ORDER_BY_SOCRE:
            return state.concat().sort((item1, item2) => {
                return item1.voteScore - item2.voteScore
            })
        case COMMENT_ORDER_BY_TIMESTAMP:
            return state.concat().sort((item1, item2) => {
                return item1.timestamp - item2.timestamp
            })
        default:
            return state.concat().sort((item1, item2) => {
                return item1.voteScore - item2.voteScore
            })
    }
}

export default comments