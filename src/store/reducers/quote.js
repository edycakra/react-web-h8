import { SET_QUOTE } from "../actionTypes"

let initialState = {
    quote: {}
}

const quote = (state = initialState.quote, action) => {
    switch (action.type) {
        case SET_QUOTE:
            return state = action.payload
        default:
            return state
    }
}

export default quote