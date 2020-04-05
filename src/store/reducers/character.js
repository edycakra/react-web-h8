import { SET_DETAIL } from "../actionTypes"

let initialState = {
    detail: []
}

const detail = (state = initialState.detail, action) => {
    switch (action.type) {
        case SET_DETAIL:
            return state = action.payload
        default:
            return state
    }
}

export default detail