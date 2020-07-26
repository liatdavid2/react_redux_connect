import {combineReducers} from 'redux'
import cakeReducer from '../redux/cake/cakeReducer'
import iceCreamReducer from '../redux/iceCream/iceCreamReducer'
import userReducer from '../redux/user/userReducer'
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
})
export default rootReducer