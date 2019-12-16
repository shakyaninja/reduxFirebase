import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initState = {
    count: 0,
}

const rootReducer = (state = initState, action) => {
    let { type, payload } = action

    switch (type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }

        case 'CHANGE_NAME':
            return {
                ...state,
                name: payload
            }
        default:
            return state
    }
}

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)