import { SET_DETAIL } from "../actionTypes"
import Toastify from 'toastify-js'
import axios from "axios"

const setDetail = (detail) => {
    return {
        type: SET_DETAIL,
        payload: detail
    }
}

const fetchDetail = (id) => {
    return dispatch => {
        axios
            .get(`https://www.breakingbadapi.com/api/characters/${id}`)
            .then(({ data }) => {
                dispatch(setDetail(data))
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
    setDetail,
    fetchDetail
}