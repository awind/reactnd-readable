import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../actions'

function comments(state = [], action) {
    const { id, timestamp, body, author, parentId } = action
    switch(action.type) {
        case ADD_COMMENT:
            return state
        case EDIT_COMMENT:
            return state
        case DELETE_COMMENT:
            return state
        default:
            return state
    }
}

export default comments