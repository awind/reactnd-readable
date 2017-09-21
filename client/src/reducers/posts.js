import { ADD_POST, EDIT_POST, DELETE_POST, POST_ORDER_BY_SCORE, POST_ORDER_BY_TIMESTAMP, UP_VOTE_POST, DOWN_VOTE_POST } from '../actions/types'

function posts(state = [], action) {
    const {id, timestamp, title, body, author, category, voteScore, deleted} = action
    switch(action.type) {
        case ADD_POST:
            const filterPosts = state.filter((item) => {
                return item.id === id
            })
            // filter duplicate
            if (filterPosts.length > 0) {
                return state
            } 
            return [...state, {
                    id,
                    timestamp,
                    title,
                    body,
                    author,
                    category,
                    voteScore,
                    deleted,
            }]
        case EDIT_POST:
            return state.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        title,
                        body
                    }
                }
                return item
            })
        case DELETE_POST:
            return state.filter((item) => {
                return item.id !== id
            })
        case UP_VOTE_POST:
            return state.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        voteScore: parseInt(item.voteScore, 10) + 1
                    }
                }
                return item
            })
        case DOWN_VOTE_POST:
            return state.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        voteScore: parseInt(item.voteScore, 10) - 1
                    }
                }
                return item
            })
        case POST_ORDER_BY_SCORE:
            return state.concat().sort((item1, item2) => {
                return item1.voteScore - item2.voteScore
            })
        case POST_ORDER_BY_TIMESTAMP:
            return state.concat().sort((item1, item2) => {
                return item1.timestamp - item2.timestamp
            })
        default:
            return state.concat().sort((item1, item2) => {
                return item1.voteScore - item2.voteScore
            })
    }
}

export default posts