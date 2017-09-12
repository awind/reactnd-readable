import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../actions'

function comments(state = [], action) {
    const { id, parentId, author, body, timestamp, parentDeleted} = action
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
        default:
            return state
    }
}

export default comments