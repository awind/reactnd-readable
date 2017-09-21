import { ADD_CATEGORY } from './types'

export function addCategory({name, path}) {
    return {
        type: ADD_CATEGORY,
        name,
        path
    }
}