import { SET_QUOTE } from "../actionTypes"
import Toastify from 'toastify-js'
import axios from "axios"

const setQuote = (quote) => {
    return {
        type: SET_QUOTE,
        payload: quote
    }
}

const fetchQuote = () => {
    return dispatch => {
        axios
            .get(`https://breakingbadapi.com/api/quotes`)
            .then(({ data }) => {
                let randomIndex = Math.floor(Math.random() * Math.floor(data.length - 1))
                let randomQuote = data[randomIndex]
                dispatch(setQuote(randomQuote))
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
    setQuote,
    fetchQuote
}