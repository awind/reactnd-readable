import { CHANGE_CATEGORY } from '../actions'

function category(state = {}, action) {
    const category = action.category
    switch(action.type) {
        case CHANGE_CATEGORY:
            return category
        default:
            return state
    }
}

export default category