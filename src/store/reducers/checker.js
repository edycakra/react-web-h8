import { CHECK_FAVORITES } from "../actionTypes"

let initialState = {
    isFavorite: false
}

const checker = (state = initialState.isFavorite, action) => {
    switch (action.type) {
        case CHECK_FAVORITES:
            return state = action.payload
        default:
            return state
    }
}

export default checker