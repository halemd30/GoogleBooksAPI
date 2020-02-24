import React from 'react'

function BookList(props) {
    return (
        <div>
            <ul>
                {props.displayResults}
            </ul>
        </div>
    )
}

export default BookList;