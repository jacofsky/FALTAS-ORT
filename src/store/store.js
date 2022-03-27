import thunk from 'redux-thunk'

import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'

import reducers from '../reducer/reducers'

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
