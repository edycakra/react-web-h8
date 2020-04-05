import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../store/actions' //bring all available actions here

export default function QuoteGenerator() {

    //STATES
    const quote = useSelector(state => state.quote)
    const dispatch = useDispatch()

    return (
        <>
            {/* QUOTE GENERATOR (BY REDUX) FROM 2ND BREAKINGBAD API*/}
            <button className="button"
                onClick={() => dispatch(allActions.quoteAction.fetchQuote())}>
                Click to Generate Random BreakingBad Quote
            </button>
            <p className="is-size-5"><b>{quote.author}</b> <i>{quote.quote}</i></p>
        </>
    )
}