import { db } from "./config"

export const getAllBooks = () => dispatch => {
    return db.collection('books').get().then(data => {
        console.log(data)
        let allBooks = data.docs.map(book => {
            return book.data()
        })
        dispatch({ type: 'GET_ALL_BOOKS', payload: allBooks })
    })
}