import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


let initState = {
    books: []
}

const reducer = (state = initState, action) => {
    let { type, payload } = action
    switch (type) {
        case 'GET_ALL_BOOKS':
            return {
                ...state,
                books: payload
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)