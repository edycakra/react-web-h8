import { SET_LOADING } from "../actionTypes"

export const setLoading = (value) => {
    return {
        type: SET_LOADING,
        payload: value
    }
}

export default {
    setLoading
}