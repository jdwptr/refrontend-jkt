//import combinereducers from redux
import { combineReducers } from 'redux'

// import user reducer
import { prodReducer } from './prodReducer'

// combine semua reducer
const allReducers = combineReducers({
    user: prodReducer,
})

export default allReducers