import React, { useState, useEffect } from 'react'

import { db } from './config'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBooks } from './actions'

export default () => {
    const books = useSelector(state => state.books)
    const dispatch = useDispatch()

    const getBooks = async () => {

        // Promise resolve process
        // let books = db.collection('books').get()

        // Promise.resolve(books).then(data => {
        //     let allBooks = data.docs.map(book => {
        //         return book.data()
        //     })
        //     console.log(allBooks)
        // })

        // let authors = db.collection('authors').get()

        // Promise.resolve(authors).then(data => {
        //     let allauthors = data.docs.map(author => {
        //         return author.data()
        //     })
        //     console.log(allauthors)
        // })

        // Normal Method
        // db.collection('books').get().then(books => {
        //     let allBooks = books.docs.map(book => {
        //         return book.data()
        //     })
        //     // setBooks(allBooks)
        //     console.log(allBooks)
        // })

        // db.collection('authors').get().then(authors => {
        //     let allauthors = authors.docs.map(author => {
        //         return author.data()
        //     })
        //     console.log(allauthors)
        // })


        // Promise all process
        // let books = db.collection('books').get()
        // let authors = db.collection('authors').get()

        // Promise.all([books, authors]).then(result => {
        //     console.log(result)
        //     let allBooks = result[0].docs.map(book => {
        //         return book.data()
        //     })
        //     let allAuthors = result[1].docs.map(author => {
        //         return author.data()
        //     })
        //     console.log({ allBooks, allAuthors })
        // }).catch(err => console.log(err))


        // This is async await process
        // try {
        // let books = await db.collection('books').get()
        // let authors = await db.collection('authors').get()

        // let allBooks = books.docs.map(book => {
        //     return book.data()
        // })
        // let allAuthors = authors.docs.map(author => {
        //     return author.data()
        // })
        // }
        // catch (err) {
        //     console.log(err)
        // }  

    }
    useEffect(() => {
        dispatch(getAllBooks())
    }, [])
    return (
        <>
            <h1>Books</h1>
            <ul>
                {
                    books.map((book, i) => {
                        return <li key={i}>{book.name}</li>
                    })
                }
            </ul>
        </>
    )
}