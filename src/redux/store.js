import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { counter } from  './reducers'

const store = createStore(counter, applyMiddleware(thunk))
console.log(store)

export default store
