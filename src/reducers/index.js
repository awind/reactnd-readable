import { combineReducers } from 'redux'
import posts from './posts'
import category from './category'


export default combineReducers({
    posts,
    category
})
