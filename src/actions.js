import { db } from "./config"

export const getAllBooks = () => async (dispatch) => {
    let books = await db.collection('books').get()
    books = books.docs
    let allData = []
    for (let i = 0; i < books.length; i++) {
        let author = await db.collection('authors').doc(books[i].data().author).get()
        let category = await db.collection('categories').doc(books[i].data().category).get()
        console.log(category.data())
        let data = {
            ...books[i].data(),
            author: {
                id: books[i].data().author,
                ...author.data()
            },
            category: {
                id: books[i].data().category,
                ...category.data()
            }
        }
        allData.push(data)
    }

    console.log(allData)
    dispatch({ type: 'GET_ALL_BOOKS', payload: allData })
}