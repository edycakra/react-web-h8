import { SET_LOADING } from "../actionTypes"

let initialState = {
    isLoading: false
}

const isLoading = (state = initialState.isLoading, action) => {
    switch (action.type) {
        case SET_LOADING:
            return state = action.payload
        default:
            return state
    }
}

export default isLoading