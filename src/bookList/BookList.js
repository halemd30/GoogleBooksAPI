import React from 'react'
import Book from '../book/Book'

function BookList(props) {
    console.log(props.results)
    return (
        <div>
            <ul>
                {props.results.map((book, i) => 
                    <Book 
                        key={i}
                        image={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.Authors}
                        price={book.saleInfo.listPrice && book.saleInfo.listPrice.amount}
                        description={book.volumeInfo.description}    
                    />
                )}
            </ul>
        </div>
    )
}

export default BookList;