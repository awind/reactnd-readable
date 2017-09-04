import { ADD_CATEGORY } from '../actions'

function categories(state = [], action) {
    const { name, path } = action
    switch(action.type) {
        case ADD_CATEGORY:
            const filterCategory = state.filter((item) => {
                return item.name === name
            })
            // filter duplicate
            if (filterCategory.length > 0) {
                return state
            } 
            return [
                ...state, {
                    name,
                    path,
                }
            ]
        default:
            return state
    }
}

export default categories