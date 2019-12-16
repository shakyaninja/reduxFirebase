import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseCounter, decreaseCounter, changeName } from './actions'
import { stat } from 'fs'

export default () => {
    let counter = useSelector(state => state.count)
    let name = useSelector(state => state.name)
    let state = useSelector(state => state)
    let dispatch = useDispatch()

    let handleIncrease = () => {
        dispatch(increaseCounter())
    }

    let handleDecrease = () => {
        dispatch(decreaseCounter())
    }

    let handleChange = (e) => {
        dispatch(changeName(e.target.value))
    }

    console.log(state)

    return (
        <>
            <h1>Hello {name}</h1>
            <input
                type="text"
                placeholder='Enter Your Name'
                value={name}
                onChange={handleChange}
            />
            <p>======</p>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </>
    )
}