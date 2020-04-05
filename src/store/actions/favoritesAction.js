import { SET_FAVORITES, CHECK_FAVORITES, SET_LOADING } from "../actionTypes"
import Toastify from 'toastify-js'
import axios from "axios"

const setFavorites = (favorites) => {
    return {
        type: SET_FAVORITES,
        payload: favorites
    }
}

const checkFavorites = (value) => {
    return {
        type: CHECK_FAVORITES,
        payload: value
    }
}

const setLoading = (value) => {
    return {
        type: SET_LOADING,
        payload: value
    }
}

const fetchFavorites = () => {
    return dispatch => {
        dispatch(setLoading(true))
        axios
            .get(`http://localhost:3000/favorites`)
            .then(({ data }) => {
                dispatch(setFavorites(data))
            })
            .catch(err => {
                Toastify({
                    text: "Something went wrong" + err.response,
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: 'right', // `left`, `center` or `right`
                    backgroundColor: "linear-gradient(to right, red, red)",
                    onClick: function () { } // Callback after click
                }).showToast();
            })
            .finally(() => {
                setLoading(false)
            })
    }
}

const addToFavorites = (payload) => {
    return dispatch => {
        axios
            .post(`http://localhost:3000/favorites`, payload)
            .then(({ data }) => {
                Toastify({
                    text: "Successfully added!",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: 'right', // `left`, `center` or `right`
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                    onClick: function () { } // Callback after click
                }).showToast();
                dispatch(setFavorites(data))
            })
            .catch(err => {
                Toastify({
                    text: "Something went wrong" + err.response,
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: 'right', // `left`, `center` or `right`
                    backgroundColor: "linear-gradient(to right, red, red)",
                    onClick: function () { } // Callback after click
                }).showToast();
            })            
    }
}

const isFavorite = (value) => {
    return dispatch => {
        axios
            .get(`http://localhost:3000/favorites?nickname=${value.nickname}`)
            .then(({ data }) => {
                if (data.length > 0) {
                    dispatch(checkFavorites(true))
                } else {
                    dispatch(checkFavorites(false))
                }
            })
            .catch(err => {
                Toastify({
                    text: "Something went wrong" + err.response,
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: 'right', // `left`, `center` or `right`
                    backgroundColor: "linear-gradient(to right, red, red)",
                    onClick: function () { } // Callback after click
                }).showToast();
            })            
    }
}

const deleteFromFavorites = (id) => {
    return dispatch => {
        axios
            .delete(`http://localhost:3000/favorites/${id}`)
            .then(() => {
                Toastify({
                    text: "Successfully deleted!",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: 'right', // `left`, `center` or `right`
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                    onClick: function () { } // Callback after click
                }).showToast();
                dispatch(fetchFavorites())
            })
            .catch(err => {
                Toastify({
                    text: "Something went wrong" + err.response,
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: 'right', // `left`, `center` or `right`
                    backgroundColor: "linear-gradient(to right, red, red)",
                    onClick: function () { } // Callback after click
                }).showToast();
            })
    }
}

export default {
    setFavorites,
    fetchFavorites,
    addToFavorites,
    isFavorite,
    deleteFromFavorites
}