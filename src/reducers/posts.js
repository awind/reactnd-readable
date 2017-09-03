import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

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
            return {
                ...state,
                id,
                title,
                body
            }
        case DELETE_POST:
            return {
                ...state,
                id
            }
        default:
            return state
    }
}

export default posts