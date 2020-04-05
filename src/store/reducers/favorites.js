import { SET_FAVORITES } from "../actionTypes"

let initialState = {
    favorites: []
}

const favorites = (state = initialState.favorites, action) => {
    switch (action.type) {
        case SET_FAVORITES:
            return state = action.payload
        default:
            return state
    }
}

export default favorites