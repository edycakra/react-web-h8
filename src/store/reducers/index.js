import counter from './counter'
import quote from './quote'
import favorites from './favorites'
import detail from './character'
import isFavorite from './checker'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    counter,
    quote,
    favorites,
    detail,
    isFavorite
})

export default rootReducer