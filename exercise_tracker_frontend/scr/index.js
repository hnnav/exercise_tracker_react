import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevtools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { rootReducer } from './reducers/rootReducer'

const store = createStore(
    rootReducer,
    composeWithDevtools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)