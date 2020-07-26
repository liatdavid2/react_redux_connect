import {combineReducers} from 'redux'
import cakeReducer from '../redux/cake/cakeReducer'
import iceCreamReducer from '../redux/iceCream/iceCreamReducer'
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
export default rootReducer