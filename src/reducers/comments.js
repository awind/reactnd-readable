import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, COMMENT_ORDER_BY_SOCRE, COMMENT_ORDER_BY_TIMESTAMP } from '../actions'

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
            return state.filter(item => {
                return item.id !== id
            })
        case COMMENT_ORDER_BY_SOCRE:
            return state.sort((a, b) => 
                parseInt(a.voteScore) - parseInt(b.voteScore)
            )
        case COMMENT_ORDER_BY_TIMESTAMP:
            return state.sort((item1, item2) => {
                return item1.timestamp - item2.timestamp
            })
        default:
            return state.sort((item1, item2) => {
                return item1.timestamp - item2.timestamp
            })
    }
}

export default comments