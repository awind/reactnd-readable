import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

export default function post(state, action) {
    const {id, timestamp, title, body, author, category, voteScore, deleted} = action
    switch(action.type) {
        case ADD_POST:
            const filterPosts = state.posts.filter((item) => {
                return item.id === id
            })
            // filter duplicate
            if (filterPosts.length > 0) {
                return state
            } 
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id,
                        timestamp,
                        title,
                        body,
                        author,
                        category,
                        voteScore,
                        deleted,
                    }
                ]
            }
        case EDIT_POST:
            return {
                ...state.posts,
                id,
                title,
                body
            }
        case DELETE_POST:
            return {
                ...state.posts,
                id
            }
        default:
            return state
    }
}

