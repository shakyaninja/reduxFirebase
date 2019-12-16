export const increaseCounter = () => {
    return { type: 'INCREMENT' }
}

export const decreaseCounter = () => {
    return { type: 'DECREMENT' }
}

export const changeName = (payload) => {
    return { type: 'CHANGE_NAME', payload }
}